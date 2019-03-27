using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(IIRandomNumberGenerator), "jsii-calc.IRandomNumberGenerator")]
    internal sealed class IRandomNumberGeneratorProxy : DeputyBase, IIRandomNumberGenerator
    {
        private IRandomNumberGeneratorProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiMethod("next", "{\"primitive\":\"number\"}", "[]")]
        public double Next()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }
    }
}