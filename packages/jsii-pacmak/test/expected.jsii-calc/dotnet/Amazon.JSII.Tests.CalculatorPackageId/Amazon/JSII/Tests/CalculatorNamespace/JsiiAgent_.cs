using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(JsiiAgent_), "jsii-calc.JsiiAgent", "[]")]
    public class JsiiAgent_ : DeputyBase
    {
        public JsiiAgent_(): base(new DeputyProps(new object[]{}))
        {
        }

        protected JsiiAgent_(ByRefValue reference): base(reference)
        {
        }

        protected JsiiAgent_(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("jsiiAgent", "{\"primitive\":\"string\",\"optional\":true}")]
        public static string JsiiAgent
        {
            get => GetStaticProperty<string>(typeof(JsiiAgent_));
        }
    }
}