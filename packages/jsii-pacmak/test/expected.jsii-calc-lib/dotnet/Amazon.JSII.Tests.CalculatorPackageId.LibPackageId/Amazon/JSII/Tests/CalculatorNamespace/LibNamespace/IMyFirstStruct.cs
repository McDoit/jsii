using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiInterface(typeof(IMyFirstStruct), "@scope/jsii-calc-lib.MyFirstStruct")]
    public interface IMyFirstStruct
    {
        [JsiiProperty("anumber", "{\"primitive\":\"number\"}")]
        double Anumber
        {
            get;
        }

        [JsiiProperty("astring", "{\"primitive\":\"string\"}")]
        string Astring
        {
            get;
        }

        [JsiiProperty("firstOptional", "{\"collection\":{\"kind\":\"array\",\"elementtype\":{\"primitive\":\"string\"}},\"optional\":true}")]
        string[] FirstOptional
        {
            get;
        }
    }
}