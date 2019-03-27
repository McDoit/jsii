package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.Calculator")
public class Calculator extends software.amazon.jsii.tests.calculator.composition.CompositeOperation {
    protected Calculator(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public Calculator(@javax.annotation.Nullable final software.amazon.jsii.tests.calculator.CalculatorProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.stream.Stream.of(props).toArray());
    }
    public Calculator() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public void add(final java.lang.Number value) {
        this.jsiiCall("add", Void.class, java.util.stream.Stream.of(java.util.Objects.requireNonNull(value, "value is required")).toArray());
    }

    public void mul(final java.lang.Number value) {
        this.jsiiCall("mul", Void.class, java.util.stream.Stream.of(java.util.Objects.requireNonNull(value, "value is required")).toArray());
    }

    public void neg() {
        this.jsiiCall("neg", Void.class);
    }

    public void pow(final java.lang.Number value) {
        this.jsiiCall("pow", Void.class, java.util.stream.Stream.of(java.util.Objects.requireNonNull(value, "value is required")).toArray());
    }

    public java.lang.Number readUnionValue() {
        return this.jsiiCall("readUnionValue", java.lang.Number.class);
    }

    @Override
    public software.amazon.jsii.tests.calculator.lib.Value getExpression() {
        return this.jsiiGet("expression", software.amazon.jsii.tests.calculator.lib.Value.class);
    }

    public java.util.List<software.amazon.jsii.tests.calculator.lib.Value> getOperationsLog() {
        return this.jsiiGet("operationsLog", java.util.List.class);
    }

    public java.util.Map<java.lang.String, java.util.List<software.amazon.jsii.tests.calculator.lib.Value>> getOperationsMap() {
        return this.jsiiGet("operationsMap", java.util.Map.class);
    }

    public software.amazon.jsii.tests.calculator.lib.Value getCurr() {
        return this.jsiiGet("curr", software.amazon.jsii.tests.calculator.lib.Value.class);
    }

    public void setCurr(final software.amazon.jsii.tests.calculator.lib.Value value) {
        this.jsiiSet("curr", java.util.Objects.requireNonNull(value, "curr is required"));
    }

    @javax.annotation.Nullable
    public java.lang.Number getMaxValue() {
        return this.jsiiGet("maxValue", java.lang.Number.class);
    }

    public void setMaxValue(@javax.annotation.Nullable final java.lang.Number value) {
        this.jsiiSet("maxValue", value);
    }

    @javax.annotation.Nullable
    public java.lang.Object getUnionProperty() {
        return this.jsiiGet("unionProperty", java.lang.Object.class);
    }

    public void setUnionProperty(@javax.annotation.Nullable final software.amazon.jsii.tests.calculator.Add value) {
        this.jsiiSet("unionProperty", value);
    }

    public void setUnionProperty(@javax.annotation.Nullable final software.amazon.jsii.tests.calculator.Multiply value) {
        this.jsiiSet("unionProperty", value);
    }

    public void setUnionProperty(@javax.annotation.Nullable final software.amazon.jsii.tests.calculator.Power value) {
        this.jsiiSet("unionProperty", value);
    }
}
