using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiInterface(typeof(IGreetee), "jsii-calc.Greetee")]
    public interface IGreetee
    {
        [JsiiProperty("name", "{\"primitive\":\"string\",\"optional\":true}")]
        string Name
        {
            get;
        }
    }
}