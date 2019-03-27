using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiInterface(typeof(IIFriendly), "@scope/jsii-calc-lib.IFriendly")]
    public interface IIFriendly
    {
        [JsiiMethod("hello", "{\"primitive\":\"string\"}", "[]")]
        string Hello();
    }
}