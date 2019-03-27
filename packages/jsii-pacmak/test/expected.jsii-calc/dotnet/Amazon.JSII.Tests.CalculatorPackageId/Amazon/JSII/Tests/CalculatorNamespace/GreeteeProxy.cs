using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(IGreetee), "jsii-calc.Greetee")]
    internal sealed class GreeteeProxy : DeputyBase, IGreetee
    {
        private GreeteeProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiProperty("name", "{\"primitive\":\"string\",\"optional\":true}")]
        public string Name
        {
            get => GetInstanceProperty<string>();
        }
    }
}