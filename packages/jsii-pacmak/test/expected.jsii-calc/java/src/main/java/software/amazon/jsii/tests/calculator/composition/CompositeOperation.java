package software.amazon.jsii.tests.calculator.composition;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.composition.CompositeOperation")
public abstract class CompositeOperation extends software.amazon.jsii.tests.calculator.lib.Operation {
    protected CompositeOperation(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public CompositeOperation() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    @Override
    public java.lang.String toString() {
        return this.jsiiCall("toString", java.lang.String.class);
    }

    public software.amazon.jsii.tests.calculator.lib.Value getExpression() {
        return this.jsiiGet("expression", software.amazon.jsii.tests.calculator.lib.Value.class);
    }

    @Override
    public java.lang.Number getValue() {
        return this.jsiiGet("value", java.lang.Number.class);
    }

    public java.util.List<java.lang.String> getDecorationPostfixes() {
        return this.jsiiGet("decorationPostfixes", java.util.List.class);
    }

    public void setDecorationPostfixes(final java.util.List<java.lang.String> value) {
        this.jsiiSet("decorationPostfixes", java.util.Objects.requireNonNull(value, "decorationPostfixes is required"));
    }

    public java.util.List<java.lang.String> getDecorationPrefixes() {
        return this.jsiiGet("decorationPrefixes", java.util.List.class);
    }

    public void setDecorationPrefixes(final java.util.List<java.lang.String> value) {
        this.jsiiSet("decorationPrefixes", java.util.Objects.requireNonNull(value, "decorationPrefixes is required"));
    }

    public software.amazon.jsii.tests.calculator.composition.CompositeOperation.CompositionStringStyle getStringStyle() {
        return this.jsiiGet("stringStyle", software.amazon.jsii.tests.calculator.composition.CompositeOperation.CompositionStringStyle.class);
    }

    public void setStringStyle(final software.amazon.jsii.tests.calculator.composition.CompositeOperation.CompositionStringStyle value) {
        this.jsiiSet("stringStyle", java.util.Objects.requireNonNull(value, "stringStyle is required"));
    }
    @software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.$Module.class, fqn = "jsii-calc.composition.CompositeOperation.CompositionStringStyle")
    public enum CompositionStringStyle {
        Normal,
        Decorated,
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.tests.calculator.composition.CompositeOperation {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
        }

        @Override
        public software.amazon.jsii.tests.calculator.lib.Value getExpression() {
            return this.jsiiGet("expression", software.amazon.jsii.tests.calculator.lib.Value.class);
        }

        @Override
        public java.lang.Number getValue() {
            return this.jsiiGet("value", java.lang.Number.class);
        }

        @Override
        public java.lang.String toString() {
            return this.jsiiCall("toString", java.lang.String.class);
        }
    }
}
