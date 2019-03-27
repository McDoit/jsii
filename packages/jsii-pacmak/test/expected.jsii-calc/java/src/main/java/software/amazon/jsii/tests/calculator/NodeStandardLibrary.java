package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.NodeStandardLibrary")
public class NodeStandardLibrary extends software.amazon.jsii.JsiiObject {
    protected NodeStandardLibrary(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public NodeStandardLibrary() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public java.lang.String cryptoSha256() {
        return this.jsiiCall("cryptoSha256", java.lang.String.class);
    }

    public java.lang.String fsReadFile() {
        return this.jsiiAsyncCall("fsReadFile", java.lang.String.class);
    }

    public java.lang.String fsReadFileSync() {
        return this.jsiiCall("fsReadFileSync", java.lang.String.class);
    }

    public java.lang.String getOsPlatform() {
        return this.jsiiGet("osPlatform", java.lang.String.class);
    }
}
