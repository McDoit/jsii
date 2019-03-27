package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.Power")
public class Power extends software.amazon.jsii.tests.calculator.composition.CompositeOperation {
    protected Power(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public Power(final software.amazon.jsii.tests.calculator.lib.Value base, final software.amazon.jsii.tests.calculator.lib.Value pow) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.stream.Stream.concat(java.util.stream.Stream.of(java.util.Objects.requireNonNull(base, "base is required")), java.util.stream.Stream.of(java.util.Objects.requireNonNull(pow, "pow is required"))).toArray());
    }

    public software.amazon.jsii.tests.calculator.lib.Value getBase() {
        return this.jsiiGet("base", software.amazon.jsii.tests.calculator.lib.Value.class);
    }

    @Override
    public software.amazon.jsii.tests.calculator.lib.Value getExpression() {
        return this.jsiiGet("expression", software.amazon.jsii.tests.calculator.lib.Value.class);
    }

    public software.amazon.jsii.tests.calculator.lib.Value getPow() {
        return this.jsiiGet("pow", software.amazon.jsii.tests.calculator.lib.Value.class);
    }
}
