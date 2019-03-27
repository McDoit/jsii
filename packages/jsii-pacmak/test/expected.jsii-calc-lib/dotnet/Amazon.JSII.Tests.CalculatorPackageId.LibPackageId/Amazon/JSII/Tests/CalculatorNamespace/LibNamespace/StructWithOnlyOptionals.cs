using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiByValue]
    public class StructWithOnlyOptionals : IStructWithOnlyOptionals
    {
        [JsiiProperty("optional1", "{\"primitive\":\"string\",\"optional\":true}", true)]
        public string Optional1
        {
            get;
            set;
        }

        [JsiiProperty("optional2", "{\"primitive\":\"number\",\"optional\":true}", true)]
        public double? Optional2
        {
            get;
            set;
        }

        [JsiiProperty("optional3", "{\"primitive\":\"boolean\",\"optional\":true}", true)]
        public bool? Optional3
        {
            get;
            set;
        }
    }
}