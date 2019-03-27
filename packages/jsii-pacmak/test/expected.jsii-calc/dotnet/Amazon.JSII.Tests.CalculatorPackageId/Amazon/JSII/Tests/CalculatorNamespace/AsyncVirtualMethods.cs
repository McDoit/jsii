using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(AsyncVirtualMethods), "jsii-calc.AsyncVirtualMethods", "[]")]
    public class AsyncVirtualMethods : DeputyBase
    {
        public AsyncVirtualMethods(): base(new DeputyProps(new object[]{}))
        {
        }

        protected AsyncVirtualMethods(ByRefValue reference): base(reference)
        {
        }

        protected AsyncVirtualMethods(DeputyProps props): base(props)
        {
        }

        [JsiiMethod("callMe", "{\"primitive\":\"number\",\"promise\":true}", "[]")]
        public virtual double CallMe()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }

        [JsiiMethod("callMe2", "{\"primitive\":\"number\",\"promise\":true}", "[]")]
        public virtual double CallMe2()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }

        [JsiiMethod("callMeDoublePromise", "{\"primitive\":\"number\",\"promise\":true}", "[]")]
        public virtual double CallMeDoublePromise()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }

        [JsiiMethod("dontOverrideMe", "{\"primitive\":\"number\"}", "[]")]
        public virtual double DontOverrideMe()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }

        [JsiiMethod("overrideMe", "{\"primitive\":\"number\",\"promise\":true}", "[{\"name\":\"mult\",\"type\":{\"primitive\":\"number\"}}]")]
        public virtual double OverrideMe(double mult)
        {
            return InvokeInstanceMethod<double>(new object[]{mult});
        }

        [JsiiMethod("overrideMeToo", "{\"primitive\":\"number\",\"promise\":true}", "[]")]
        public virtual double OverrideMeToo()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }
    }
}