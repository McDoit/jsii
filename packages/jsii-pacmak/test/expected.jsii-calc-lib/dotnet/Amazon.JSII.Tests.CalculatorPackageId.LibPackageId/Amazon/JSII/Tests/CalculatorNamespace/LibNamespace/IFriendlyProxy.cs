using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiTypeProxy(typeof(IIFriendly), "@scope/jsii-calc-lib.IFriendly")]
    internal sealed class IFriendlyProxy : DeputyBase, IIFriendly
    {
        private IFriendlyProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiMethod("hello", "{\"primitive\":\"string\"}", "[]")]
        public string Hello()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }
    }
}