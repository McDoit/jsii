using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;
using System;
using System.Collections.Generic;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiByValue]
    public class DerivedStruct : IDerivedStruct
    {
        [JsiiProperty("anotherRequired", "{\"primitive\":\"date\"}", true)]
        public DateTime AnotherRequired
        {
            get;
            set;
        }

        [JsiiProperty("bool", "{\"primitive\":\"boolean\"}", true)]
        public bool Bool
        {
            get;
            set;
        }

        [JsiiProperty("nonPrimitive", "{\"fqn\":\"jsii-calc.DoubleTrouble\"}", true)]
        public DoubleTrouble NonPrimitive
        {
            get;
            set;
        }

        [JsiiProperty("anotherOptional", "{\"collection\":{\"kind\":\"map\",\"elementtype\":{\"fqn\":\"@scope/jsii-calc-lib.Value\"}},\"optional\":true}", true)]
        public IDictionary<string, Value_> AnotherOptional
        {
            get;
            set;
        }

        [JsiiProperty("optionalAny", "{\"primitive\":\"any\",\"optional\":true}", true)]
        public object OptionalAny
        {
            get;
            set;
        }

        [JsiiProperty("optionalArray", "{\"collection\":{\"kind\":\"array\",\"elementtype\":{\"primitive\":\"string\"}},\"optional\":true}", true)]
        public string[] OptionalArray
        {
            get;
            set;
        }

        [JsiiProperty("anumber", "{\"primitive\":\"number\"}", true)]
        public double Anumber
        {
            get;
            set;
        }

        [JsiiProperty("astring", "{\"primitive\":\"string\"}", true)]
        public string Astring
        {
            get;
            set;
        }

        [JsiiProperty("firstOptional", "{\"collection\":{\"kind\":\"array\",\"elementtype\":{\"primitive\":\"string\"}},\"optional\":true}", true)]
        public string[] FirstOptional
        {
            get;
            set;
        }
    }
}