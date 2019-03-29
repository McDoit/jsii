package software.amazon.jsii.tests.calculator.base;

@javax.annotation.Generated(value = "jsii-pacmak")
@software.amazon.jsii.Jsii(module = software.amazon.jsii.tests.calculator.base.$Module.class, fqn = "@scope/jsii-calc-base.Base")
public abstract class Base extends software.amazon.jsii.JsiiObject {
    protected Base(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
        super(mode);
    }
    public Base() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.Jsii);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public java.lang.Object typeName() {
        return this.jsiiCall("typeName", java.lang.Object.class);
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.tests.calculator.base.Base {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
        }
    }
}
