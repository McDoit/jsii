using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiInterface(typeof(IIRandomNumberGenerator), "jsii-calc.IRandomNumberGenerator")]
    public interface IIRandomNumberGenerator
    {
        [JsiiMethod("next", "{\"primitive\":\"number\"}", "[]")]
        double Next();
    }
}