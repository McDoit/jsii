using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(IIFriendlyRandomGenerator), "jsii-calc.IFriendlyRandomGenerator")]
    internal sealed class IFriendlyRandomGeneratorProxy : DeputyBase, IIFriendlyRandomGenerator
    {
        private IFriendlyRandomGeneratorProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiMethod("next", "{\"primitive\":\"number\"}", "[]")]
        public double Next()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }

        [JsiiMethod("hello", "{\"primitive\":\"string\"}", "[]")]
        public string Hello()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }
    }
}