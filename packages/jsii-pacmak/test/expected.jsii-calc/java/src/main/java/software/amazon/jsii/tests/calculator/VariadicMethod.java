package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.VariadicMethod")
public class VariadicMethod extends software.amazon.jsii.JsiiObject {
    protected VariadicMethod(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public VariadicMethod(final java.lang.Number... prefix) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.Arrays.stream(java.util.Objects.requireNonNull(prefix, "prefix is required")).toArray());
    }

    public java.util.List<java.lang.Number> asArray(final java.lang.Number first, final java.lang.Number... others) {
        return this.jsiiCall("asArray", java.util.List.class, java.util.stream.Stream.concat(java.util.stream.Stream.of(java.util.Objects.requireNonNull(first, "first is required")), java.util.Arrays.stream(java.util.Objects.requireNonNull(others, "others is required"))).toArray());
    }
}
