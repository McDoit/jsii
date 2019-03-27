package software.amazon.jsii.tests.calculator.lib;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.lib.$Module.class, fqn = "@scope/jsii-calc-lib.Value")
public abstract class Value extends software.amazon.jsii.tests.calculator.base.Base {
    protected Value(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }

    public java.lang.String toString() {
        return this.jsiiCall("toString", java.lang.String.class);
    }

    public java.lang.Number getValue() {
        return this.jsiiGet("value", java.lang.Number.class);
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.tests.calculator.lib.Value {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
        }

        @Override
        public java.lang.Number getValue() {
            return this.jsiiGet("value", java.lang.Number.class);
        }
    }
}
