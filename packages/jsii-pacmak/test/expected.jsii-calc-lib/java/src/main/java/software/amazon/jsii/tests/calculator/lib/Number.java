package software.amazon.jsii.tests.calculator.lib;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.lib.$Module.class, fqn = "@scope/jsii-calc-lib.Number")
public class Number extends software.amazon.jsii.tests.calculator.lib.Value implements software.amazon.jsii.tests.calculator.lib.IDoublable {
    protected Number(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public Number(final java.lang.Number value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.stream.Stream.of(java.util.Objects.requireNonNull(value, "value is required")).toArray());
    }

    @Override
    public java.lang.Number getDoubleValue() {
        return this.jsiiGet("doubleValue", java.lang.Number.class);
    }

    @Override
    public java.lang.Number getValue() {
        return this.jsiiGet("value", java.lang.Number.class);
    }
}
