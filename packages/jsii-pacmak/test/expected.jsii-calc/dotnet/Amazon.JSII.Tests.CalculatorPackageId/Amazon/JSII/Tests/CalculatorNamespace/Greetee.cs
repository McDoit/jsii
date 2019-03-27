using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiByValue]
    public class Greetee : IGreetee
    {
        [JsiiProperty("name", "{\"primitive\":\"string\",\"optional\":true}", true)]
        public string Name
        {
            get;
            set;
        }
    }
}