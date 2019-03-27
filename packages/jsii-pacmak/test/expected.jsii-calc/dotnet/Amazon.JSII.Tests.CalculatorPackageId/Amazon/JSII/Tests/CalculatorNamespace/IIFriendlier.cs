using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiInterface(typeof(IIFriendlier), "jsii-calc.IFriendlier")]
    public interface IIFriendlier : IIFriendly
    {
        [JsiiMethod("farewell", "{\"primitive\":\"string\"}", "[]")]
        string Farewell();
        [JsiiMethod("goodbye", "{\"primitive\":\"string\"}", "[]")]
        string Goodbye();
    }
}