using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.BaseNamespace;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(UseCalcBase), "jsii-calc.UseCalcBase", "[]")]
    public class UseCalcBase : DeputyBase
    {
        public UseCalcBase(): base(new DeputyProps(new object[]{}))
        {
        }

        protected UseCalcBase(ByRefValue reference): base(reference)
        {
        }

        protected UseCalcBase(DeputyProps props): base(props)
        {
        }

        [JsiiMethod("hello", "{\"fqn\":\"@scope/jsii-calc-base.Base\"}", "[]")]
        public virtual Amazon.JSII.Tests.CalculatorNamespace.BaseNamespace.Base Hello()
        {
            return InvokeInstanceMethod<Amazon.JSII.Tests.CalculatorNamespace.BaseNamespace.Base>(new object[]{});
        }
    }
}