package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.Multiply")
public class Multiply extends software.amazon.jsii.tests.calculator.BinaryOperation implements software.amazon.jsii.tests.calculator.IFriendlier,software.amazon.jsii.tests.calculator.IRandomNumberGenerator {
    protected Multiply(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public Multiply(final software.amazon.jsii.tests.calculator.lib.Value lhs, final software.amazon.jsii.tests.calculator.lib.Value rhs) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.stream.Stream.concat(java.util.stream.Stream.of(java.util.Objects.requireNonNull(lhs, "lhs is required")), java.util.stream.Stream.of(java.util.Objects.requireNonNull(rhs, "rhs is required"))).toArray());
    }

    @Override
    public java.lang.String farewell() {
        return this.jsiiCall("farewell", java.lang.String.class);
    }

    @Override
    public java.lang.String goodbye() {
        return this.jsiiCall("goodbye", java.lang.String.class);
    }

    @Override
    public java.lang.Number next() {
        return this.jsiiCall("next", java.lang.Number.class);
    }

    @Override
    public java.lang.String toString() {
        return this.jsiiCall("toString", java.lang.String.class);
    }

    @Override
    public java.lang.Number getValue() {
        return this.jsiiGet("value", java.lang.Number.class);
    }
}
