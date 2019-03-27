package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.EraseUndefinedHashValues")
public class EraseUndefinedHashValues extends software.amazon.jsii.JsiiObject {
    protected EraseUndefinedHashValues(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public EraseUndefinedHashValues() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public static java.lang.Boolean doesKeyExist(final software.amazon.jsii.tests.calculator.EraseUndefinedHashValuesOptions opts, final java.lang.String key) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(software.amazon.jsii.tests.calculator.EraseUndefinedHashValues.class, "doesKeyExist", java.lang.Boolean.class, java.util.stream.Stream.concat(java.util.stream.Stream.of(java.util.Objects.requireNonNull(opts, "opts is required")), java.util.stream.Stream.of(java.util.Objects.requireNonNull(key, "key is required"))).toArray());
    }

    public static java.lang.Object prop1IsNull() {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(software.amazon.jsii.tests.calculator.EraseUndefinedHashValues.class, "prop1IsNull", java.lang.Object.class);
    }

    public static java.lang.Object prop2IsUndefined() {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(software.amazon.jsii.tests.calculator.EraseUndefinedHashValues.class, "prop2IsUndefined", java.lang.Object.class);
    }
}
