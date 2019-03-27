package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.ObjectRefsInCollections")
public class ObjectRefsInCollections extends software.amazon.jsii.JsiiObject {
    protected ObjectRefsInCollections(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public ObjectRefsInCollections() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public java.lang.Number sumFromArray(final java.util.List<software.amazon.jsii.tests.calculator.lib.Value> values) {
        return this.jsiiCall("sumFromArray", java.lang.Number.class, java.util.stream.Stream.of(java.util.Objects.requireNonNull(values, "values is required")).toArray());
    }

    public java.lang.Number sumFromMap(final java.util.Map<java.lang.String, software.amazon.jsii.tests.calculator.lib.Value> values) {
        return this.jsiiCall("sumFromMap", java.lang.Number.class, java.util.stream.Stream.of(java.util.Objects.requireNonNull(values, "values is required")).toArray());
    }
}
