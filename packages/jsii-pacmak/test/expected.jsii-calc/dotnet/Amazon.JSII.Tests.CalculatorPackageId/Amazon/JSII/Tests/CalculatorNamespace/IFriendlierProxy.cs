using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(IIFriendlier), "jsii-calc.IFriendlier")]
    internal sealed class IFriendlierProxy : DeputyBase, IIFriendlier
    {
        private IFriendlierProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiMethod("farewell", "{\"primitive\":\"string\"}", "[]")]
        public string Farewell()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }

        [JsiiMethod("goodbye", "{\"primitive\":\"string\"}", "[]")]
        public string Goodbye()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }

        [JsiiMethod("hello", "{\"primitive\":\"string\"}", "[]")]
        public string Hello()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }
    }
}