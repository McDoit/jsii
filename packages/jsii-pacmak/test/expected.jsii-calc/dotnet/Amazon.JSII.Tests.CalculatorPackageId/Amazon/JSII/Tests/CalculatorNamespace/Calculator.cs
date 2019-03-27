using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.composition;
using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;
using System.Collections.Generic;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(Calculator), "jsii-calc.Calculator", "[{\"name\":\"props\",\"type\":{\"fqn\":\"jsii-calc.CalculatorProps\",\"optional\":true}}]")]
    public class Calculator : CompositeOperation_
    {
        public Calculator(ICalculatorProps props): base(new DeputyProps(new object[]{props}))
        {
        }

        protected Calculator(ByRefValue reference): base(reference)
        {
        }

        protected Calculator(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("expression", "{\"fqn\":\"@scope/jsii-calc-lib.Value\"}")]
        public override Value_ Expression
        {
            get => GetInstanceProperty<Value_>();
        }

        [JsiiProperty("operationsLog", "{\"collection\":{\"kind\":\"array\",\"elementtype\":{\"fqn\":\"@scope/jsii-calc-lib.Value\"}}}")]
        public virtual Value_[] OperationsLog
        {
            get => GetInstanceProperty<Value_[]>();
        }

        [JsiiProperty("operationsMap", "{\"collection\":{\"kind\":\"map\",\"elementtype\":{\"collection\":{\"kind\":\"array\",\"elementtype\":{\"fqn\":\"@scope/jsii-calc-lib.Value\"}}}}}")]
        public virtual IDictionary<string, Value_[]> OperationsMap
        {
            get => GetInstanceProperty<IDictionary<string, Value_[]>>();
        }

        [JsiiProperty("curr", "{\"fqn\":\"@scope/jsii-calc-lib.Value\"}")]
        public virtual Value_ Curr
        {
            get => GetInstanceProperty<Value_>();
            set => SetInstanceProperty(value);
        }

        [JsiiProperty("maxValue", "{\"primitive\":\"number\",\"optional\":true}")]
        public virtual double? MaxValue
        {
            get => GetInstanceProperty<double? >();
            set => SetInstanceProperty(value);
        }

        [JsiiProperty("unionProperty", "{\"union\":{\"types\":[{\"fqn\":\"jsii-calc.Add\"},{\"fqn\":\"jsii-calc.Multiply\"},{\"fqn\":\"jsii-calc.Power\"}]},\"optional\":true}")]
        public virtual object UnionProperty
        {
            get => GetInstanceProperty<object>();
            set => SetInstanceProperty(value);
        }

        [JsiiMethod("add", null, "[{\"name\":\"value\",\"type\":{\"primitive\":\"number\"}}]")]
        public virtual void Add(double value)
        {
            InvokeInstanceVoidMethod(new object[]{value});
        }

        [JsiiMethod("mul", null, "[{\"name\":\"value\",\"type\":{\"primitive\":\"number\"}}]")]
        public virtual void Mul(double value)
        {
            InvokeInstanceVoidMethod(new object[]{value});
        }

        [JsiiMethod("neg", null, "[]")]
        public virtual void Neg()
        {
            InvokeInstanceVoidMethod(new object[]{});
        }

        [JsiiMethod("pow", null, "[{\"name\":\"value\",\"type\":{\"primitive\":\"number\"}}]")]
        public virtual void Pow(double value)
        {
            InvokeInstanceVoidMethod(new object[]{value});
        }

        [JsiiMethod("readUnionValue", "{\"primitive\":\"number\"}", "[]")]
        public virtual double ReadUnionValue()
        {
            return InvokeInstanceMethod<double>(new object[]{});
        }
    }
}