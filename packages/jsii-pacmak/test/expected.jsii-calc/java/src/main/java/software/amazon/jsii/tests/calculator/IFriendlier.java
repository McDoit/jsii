package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
public interface IFriendlier extends software.amazon.jsii.JsiiSerializable, software.amazon.jsii.tests.calculator.lib.IFriendly {
    java.lang.String farewell();
    java.lang.String goodbye();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements software.amazon.jsii.tests.calculator.IFriendlier {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
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
        public java.lang.String hello() {
            return this.jsiiCall("hello", java.lang.String.class);
        }
    }
}
