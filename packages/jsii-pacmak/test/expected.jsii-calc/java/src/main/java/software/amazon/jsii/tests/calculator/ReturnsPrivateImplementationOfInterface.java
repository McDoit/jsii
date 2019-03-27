package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.ReturnsPrivateImplementationOfInterface")
public class ReturnsPrivateImplementationOfInterface extends software.amazon.jsii.JsiiObject {
    protected ReturnsPrivateImplementationOfInterface(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public ReturnsPrivateImplementationOfInterface() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public software.amazon.jsii.tests.calculator.IPrivatelyImplemented getPrivateImplementation() {
        return this.jsiiGet("privateImplementation", software.amazon.jsii.tests.calculator.IPrivatelyImplemented.class);
    }
}
