package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
public interface IAnotherPublicInterface extends software.amazon.jsii.JsiiSerializable {
    java.lang.String getA();
    void setA(final java.lang.String value);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements software.amazon.jsii.tests.calculator.IAnotherPublicInterface {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
        }

        @Override
        public java.lang.String getA() {
            return this.jsiiGet("a", java.lang.String.class);
        }

        @Override
        public void setA(final java.lang.String value) {
            this.jsiiSet("a", java.util.Objects.requireNonNull(value, "a is required"));
        }
    }
}
