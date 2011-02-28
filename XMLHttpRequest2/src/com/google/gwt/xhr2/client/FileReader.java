package com.google.gwt.xhr2.client;

import com.google.gwt.core.client.JavaScriptObject;

public class FileReader extends JavaScriptObject {
	protected FileReader() {
	}

	/**
	 * No data has been loaded yet.
	 */
	public static final int EMPTY = 0;
	/**
	 * Data is currently being loaded.
	 */
	public static final int LOADING = 1;
	/**
	 * The entire read request has been completed.
	 */
	public static final int DONE = 2;

	/**
	 * Create new FileReader object.
	 * 
	 * @return new FileReader object
	 */
	public static native FileReader create() /*-{
		return new $wnd.FileReader();
	}-*/;

	/**
	 * Called when the read has successfully completed.
	 * 
	 * @param handler
	 */
	public final native void addProgressHandler(FileReaderProgressEvent handler)/*-{
		this.onload = $entry(function(e) {
			handler.@com.google.gwt.xhr2.client.FileReaderProgressEvent::onLoad(Lcom/google/gwt/xhr2/client/File;)(e.target);
		});
		this.abort = $entry(function(e) {
			handler.@com.google.gwt.xhr2.client.FileReaderProgressEvent::onAbort(Lcom/google/gwt/xhr2/client/File;)(e.target);
		});
		this.onprogress = $entry(function(e) {
			var loaded = 0, total = 0;
			if (e.lengthComputable) {
				loaded = e.loaded;
				total = e.total;
			}
			handler.@com.google.gwt.xhr2.client.FileReaderProgressEvent::onProgress(Lcom/google/gwt/xhr2/client/File;Ljava/lang/Double;Ljava/lang/Double;)(e.target,loaded,total);
		});
		this.onerror = $entry(function(e) {
			//var error = @com.kalicinscy.web.restclient.client.api.FileReader::generateError(Ljava/lang/Integer;)(e.code);
			handler.@com.google.gwt.xhr2.client.FileReaderProgressEvent::onError(Lcom/google/gwt/xhr2/client/File;Lcom/google/gwt/xhr2/client/FileError;)(e.target,e);
		});
	}-*/;

//	public static FileError generateError(Integer code) {
//		return new FileError(code);
//	}

	/**
	 * Abort file read. It's cause onError to be inited with code 3
	 * {@link FileError.ABORT_ERR}
	 */
	public final native void abort()/*-{
		this.abort();
	}-*/;

	public final native void readAsArrayBuffer(File file)/*-{
		this.readAsArrayBuffer(file);
	}-*/;

	public final native void readAsBinaryString(File file)/*-{
		this.readAsBinaryString(file);
	}-*/;

	public final native void readAsText(File file)/*-{
		this.readAsText(file);
	}-*/;
	public final native void readAsText(File file, String encoding)/*-{
		this.readAsText(file, encoding);
	}-*/;
	public final native void readAsDataURL(File file)/*-{
		this.readAsDataURL(file);
	}-*/;
}