package org.rest.client.dom.worker;

public interface WorkerMessageHandler {
	void onMessage(String message);
	void onError(WebWorkerError err);
}
