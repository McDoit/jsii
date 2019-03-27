package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.DocumentedClass")
public class DocumentedClass extends software.amazon.jsii.JsiiObject {
    protected DocumentedClass(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public DocumentedClass() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public java.lang.Number greet(@javax.annotation.Nullable final software.amazon.jsii.tests.calculator.Greetee greetee) {
        return this.jsiiCall("greet", java.lang.Number.class, java.util.stream.Stream.of(greetee).toArray());
    }

    public java.lang.Number greet() {
        return this.jsiiCall("greet", java.lang.Number.class);
    }
}
