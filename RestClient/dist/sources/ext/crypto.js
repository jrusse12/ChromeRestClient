/* The following functions are (c) 2011 by John M Hanna and are
 * released under the terms of the BSD License.
 * You must freely redistribute them with their source -- see the
 * BSD for details.
 *  -- Latest version found at http://sourceforge.net/projects/shop-js
 */
//compiled via http://closure-compiler.appspot.com
bs=28;bx2=1<<bs;bm=bx2-1;bx=bx2>>1;bd=bs>>1;bdm=(1<<bd)-1;log2=Math.log(2);function badd(a,b){var c=a.length,d=b.length;if(c<d)return badd(b,a);for(var e=0,f=[],g=0;g<d;g++)e+=a[g]+b[g],f[g]=e&bm,e>>>=bs;for(;g<c;g++)e+=a[g],f[g]=e&bm,e>>>=bs;e&&(f[g]=e);return f}function beq(a,b){if(a.length!=b.length)return 0;for(var c=a.length-1;0<=c;c--)if(a[c]!=b[c])return 0;return 1}
function bsub(a,b){var c=a.length,d=b.length,e=0,f=[];if(d>c)return[];if(d==c){if(b[d-1]>a[d-1])return[];if(1==d)return[a[0]-b[0]]}for(var g=0;g<d;g++)e+=a[g]-b[g],f[g]=e&bm,e>>=bs;for(;g<c;g++)e+=a[g],f[g]=e&bm,e>>=bs;if(e)return[];if(f[g-1])return f;for(;1<g&&0==f[g-1];)g--;return f.slice(0,g)}
function bmul(a,b){var b=b.concat([0]),c=a.length,d=b.length,e=[],f,g,h,i,k,l,o,p,r;for(f=c+d;0<=f;f--)e[f]=0;for(f=0;f<c;f++)if(g=a[f]){h=0;p=g>>bd;o=g&bdm;i=f;for(g=0;g<d;g++,i++)k=b[g],l=k>>bd,k&=bdm,ghh=k*p+o*l,r=ghh>>bd,ghh&=bdm,h+=e[i]+o*k+(ghh<<bd),e[i]=h&bm,h=(h>>bs)+l*p+r}f=e.length;if(e[f-1])return e;for(;1<f&&0==e[f-1];)f--;return e.slice(0,f)}function blshift(a,b){var c,d=0,e=[];for(c=0;c<a.length;c++)d|=a[c]<<b,e[c]=d&bm,d>>=bs;d&&(e[c]=d);return e}
function brshift(a){var b=0,c,d,e=[];for(c=a.length-1;0<=c;c--)d=a[c],b<<=bs,e[c]=(d|b)>>1,b=d&1;for(;1<e.length&&0==e[e.length-1];)e=e.slice(0,-1);this.a=e;this.c=b;return this}function zeros(a){for(var b=[];0<a--;)b[a]=0;return b}function toppart(a,b,c){for(var d=0;0<=b&&0<c--;)d=d*bx2+a[b--];return d}
function bdiv(a,b){var c=a.length-1,d=b.length-1,e=c-d;if(c<d||c==d&&(a[c]<b[c]||0<c&&a[c]==b[c]&&a[c-1]<b[c-1]))return this.q=[0],this.mod=a,this;if(c==d&&4>toppart(a,d,2)/toppart(b,d,2)){for(var f=0;;){c=bsub(a,b);if(0==c.length)break;a=c;f++}this.q=[f];this.mod=a;return this}var g,h;h=Math.floor(Math.log(b[d])/log2)+1;if(g=bs-h){a=a.concat();b=b.concat();for(i=d;0<i;i--)b[i]=b[i]<<g&bm|b[i-1]>>h;b[0]=b[0]<<g&bm;a[c]&bm<<h&bm&&(a[++c]=0,e++);for(i=c;0<i;i--)a[i]=a[i]<<g&bm|a[i-1]>>h;a[0]=a[0]<<
g&bm}var i,k,l,f=zeros(e+1);for(l=zeros(e).concat(b);;){k=bsub(a,l);if(0==k.length)break;f[e]++;a=k}var e=b[d],o=toppart(b,d,2);for(i=c;i>d;i--){m=i-d-1;f[m]=i>=a.length?1:a[i]==e?bm:Math.floor(toppart(a,i,2)/e);for(topx=toppart(a,i,3);f[m]*o>topx;)f[m]--;l=l.slice(1);k=bsub(a,bmul([f[m]],l));0==k.length&&(f[m]--,k=bsub(a,bmul([f[m]],l)));a=k}if(g){for(i=0;i<a.length-1;i++)a[i]=a[i]>>g|a[i+1]<<h&bm;a[a.length-1]>>=g}for(;1<f.length&&0==f[f.length-1];)f=f.slice(0,f.length-1);for(;1<a.length&&0==a[a.length-
1];)a=a.slice(0,a.length-1);this.mod=a;this.q=f;return this}function bmod(a,b){if(1==b.length){if(1==a.length)return[a[0]%b[0]];if(b[0]<bdm)return[simplemod(a,b[0])]}return bdiv(a,b).mod}function simplemod(a,b){if(b>bdm)return bmod(a,[b]);for(var c=0,d,e=a.length-1;0<=e;e--)d=a[e],c=((d>>bd)+(c<<bd))%b,c=((d&bdm)+(c<<bd))%b;return c}
function bmodexp(a,b,c){var d=[1],e,f,g=a.concat(),h=[],a=2*c.length;for(h[a--]=1;0<=a;a--)h[a]=0;h=bdiv(h,c).q;for(a=0;a<b.length;a++){f=1;for(e=0;e<bs;e++,f<<=1)b[a]&f&&(d=bmod2(bmul(d,g),c,h)),g=bmod2(bmul(g,g),c,h)}return d}
function bmod2(a,b,c){var d=a.length-(b.length<<1);if(0<d)return bmod2(a.slice(0,d).concat(bmod2(a.slice(d),b,c)),b,c);var d=b.length+1,e=bmul(a.slice(b.length-1),c).slice(d),f=a.slice(0,d),e=bmul(e,b).slice(0,d),a=bsub(f,e);0==a.length&&(f[d]=1,a=bsub(f,e));for(f=0;;f++){d=bsub(a,b);if(0==d.length)break;a=d;if(3<=f)return bmod2(a,b,c)}return a}function sub2(a,b){var c=bsub(a,b);0==c.length?(this.a=bsub(b,a),this.sign=1):(this.a=c,this.sign=0);return this}
function signedsub(a,b){if(a.sign){if(b.sign)return sub2(b,a);this.a=badd(a,b);this.sign=1}else if(b.sign)this.a=badd(a,b),this.sign=0;else return sub2(a,b);return this}function modinverse(a,b){var c=b.concat(),d,e,f=[1],g=[0],h;f.sign=0;for(g.sign=0;1<c.length||c[0];)d=c.concat(),e=bdiv(a,c),c=e.mod,q=e.q,a=d,d=g.concat(),h=g.sign,e=bmul(g,q),e.sign=g.sign,e=signedsub(f,e),g=e.a,g.sign=e.sign,f=d,f.sign=h;if(0==beq(a,[1]))return[0];f.sign&&(f=bsub(b,f));return f}
function crt_RSA(a,b,c,d){var e=bmodexp(bmod(a,c),bmod(b,bsub(c,[1])),c),a=bmodexp(bmod(a,d),bmod(b,bsub(d,[1])),d),b=bsub(a,e);0==b.length?(b=bsub(e,a),b=bmod(bmul(b,modinverse(c,d)),d),b=bsub(d,b)):b=bmod(bmul(b,modinverse(c,d)),d);return badd(bmul(b,c),e)}function t2b(a){for(var b=8*a.length,c=1,d=[0],e=0,f=0,g=1,h=a.charCodeAt(0),i=0;i<b;i++)if(c>bm&&(c=1,d[++e]=0),h&g&&(d[e]|=c),c<<=1,255<(g<<=1))g=1,h=a.charCodeAt(++f);return d}
function b2t(a){for(var b=a.length*bs,c=1,d=0,e=[0],f=1,g=0,h=0;h<b;h++){a[d]&c&&(e[g]|=f);if(255<(f<<=1))f=1,e[++g]=0;if((c<<=1)>bm)c=1,d++}for(;0==e[g];)g--;a="";for(h=0;h<=g;h++)a+=String.fromCharCode(e[h]);return a}b64s='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"';function textToBase64(a){var b="",c=0,d=0,e=a.length-1,f;for(n=0;n<=e;n++)if(f=a.charCodeAt(n),b+=b64s.charAt((f<<c|d)&63),d=f>>6-c,c+=2,6==c||n==e)b+=b64s.charAt(d),44==n%45&&(b+="\n"),d=c=0;return b}
function base64ToText(a){var b="",c=0,d=0,e;for(n=0;n<a.length;n++)e=b64s.indexOf(a.charAt(n)),0<=e&&(c&&(b+=String.fromCharCode(e<<8-c&255|d)),d=e>>c,c+=2,8==c&&(c=0));return b}function rc4(a,b){var c,d,e,f;f=a.length;s=[];for(c=0;256>c;c++)s[c]=c;for(j=d=0;2>j;j++)for(c=0;256>c;c++)d=(a.charCodeAt(c%f)+s[c]+d)%256,e=s[c],s[c]=s[d],s[d]=e;var g="";for(c=0;c<b.length;c++)f=c&255,d=s[f]+d&255,e=s[f],s[f]=s[d],s[d]=e,g+=String.fromCharCode(b.charCodeAt(c)^s[(s[f]+s[d])%256]);return g}
function ror(a,b){return(b&=7)?a>>b|a<<8-b&255:a}function hash(a,b){for(var c=a.length,d=[],e="",f=1,g=4,h=0;h<b;h++)d[h]=f=5081*f*f+h&255;for(;c--;)g=d[c%b]^=ror(a.charCodeAt(c),g)^d[d[5081*c%b]%b];for(h=0;h<b;h++)e+=String.fromCharCode(d[h]^ror(d[d[171*h%b]%b],d[h]));return e}function rsaEncode(a,b,c){var d=Math.floor((b.length+1)*bs/8),e=hash(c+Date()+Math.random(),d),e=bmod(t2b(e),b),d=b2t(e),a=bmodexp(e,a,b),a=b2t(a);return textToBase64(String.fromCharCode(a.length)+a+rc4(d,c))}
function rsaDecode(a,b){var b=base64ToText(b),c=b.charCodeAt(0),d=b.substr(1,c),b=b.substr(c+1),c=t2b(d);sessionkey=crt_RSA(c,a[0],a[1],a[2]);sessionkey=b2t(sessionkey);return b=rc4(sessionkey,b)};