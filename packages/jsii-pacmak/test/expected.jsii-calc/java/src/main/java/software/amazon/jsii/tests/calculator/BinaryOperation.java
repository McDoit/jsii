package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.BinaryOperation")
public abstract class BinaryOperation extends software.amazon.jsii.tests.calculator.lib.Operation implements software.amazon.jsii.tests.calculator.lib.IFriendly {
    protected BinaryOperation(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }

    @Override
    public java.lang.String hello() {
        return this.jsiiCall("hello", java.lang.String.class);
    }

    public software.amazon.jsii.tests.calculator.lib.Value getLhs() {
        return this.jsiiGet("lhs", software.amazon.jsii.tests.calculator.lib.Value.class);
    }

    public software.amazon.jsii.tests.calculator.lib.Value getRhs() {
        return this.jsiiGet("rhs", software.amazon.jsii.tests.calculator.lib.Value.class);
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.tests.calculator.BinaryOperation {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
        }

        @Override
        public java.lang.Number getValue() {
            return this.jsiiGet("value", java.lang.Number.class);
        }

        @Override
        public java.lang.String hello() {
            return this.jsiiCall("hello", java.lang.String.class);
        }

        @Override
        public java.lang.String toString() {
            return this.jsiiCall("toString", java.lang.String.class);
        }
    }
}
