using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(DoNotOverridePrivates), "jsii-calc.DoNotOverridePrivates", "[]")]
    public class DoNotOverridePrivates : DeputyBase
    {
        public DoNotOverridePrivates(): base(new DeputyProps(new object[]{}))
        {
        }

        protected DoNotOverridePrivates(ByRefValue reference): base(reference)
        {
        }

        protected DoNotOverridePrivates(DeputyProps props): base(props)
        {
        }

        [JsiiMethod("privateMethodValue", "{\"primitive\":\"string\"}", "[]")]
        public virtual string PrivateMethodValue()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }

        [JsiiMethod("privatePropertyValue", "{\"primitive\":\"string\"}", "[]")]
        public virtual string PrivatePropertyValue()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }
    }
}