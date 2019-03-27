jsii Calculator
===============

.. mdinclude:: ./_jsii-calc.README.md

Reference
---------

.. tabs::

   .. group-tab:: C#

      View in `Nuget <https://www.nuget.org/packages/Amazon.JSII.Tests.CalculatorPackageId/0.8.0>`_

      **csproj**:

      .. code-block:: xml

         <PackageReference Include="Amazon.JSII.Tests.CalculatorPackageId" Version="0.8.0" />

      **dotnet**:

      .. code-block:: console

         dotnet add package Amazon.JSII.Tests.CalculatorPackageId --version 0.8.0

      **packages.config**:

      .. code-block:: xml

         <package id="Amazon.JSII.Tests.CalculatorPackageId" version="0.8.0" />


   .. group-tab:: Java

      View in `Maven Central <https://repo1.maven.org/maven2/software/amazon/jsii/tests/calculator/0.8.0/>`_

      **Apache Buildr**:

      .. code-block:: none

         'software.amazon.jsii.tests:calculator:jar:0.8.0'

      **Apache Ivy**:

      .. code-block:: xml

         <dependency groupId="software.amazon.jsii.tests" name="calculator" rev="0.8.0"/>

      **Apache Maven**:

      .. code-block:: xml

         <dependency>
           <groupId>software.amazon.jsii.tests</groupId>
           <artifactId>calculator</artifactId>
           <version>0.8.0</version>
         </dependency>

      **Gradle / Grails**:

      .. code-block:: none

         compile 'software.amazon.jsii.tests:calculator:0.8.0'

      **Groovy Grape**:

      .. code-block:: none

         @Grapes(
         @Grab(group='software.amazon.jsii.tests', module='calculator', version='0.8.0')
         )


   .. group-tab:: JavaScript

      View in `NPM <https://www.npmjs.com/package/jsii-calc/v/0.8.0>`_

      **npm**:

      .. code-block:: console

         $ npm i jsii-calc@0.8.0

      **package.json**:

      .. code-block:: js

         {
           "jsii-calc": "^0.8.0"
         }

      **yarn**:

      .. code-block:: console

         $ yarn add jsii-calc@0.8.0


   .. group-tab:: TypeScript

      View in `NPM <https://www.npmjs.com/package/jsii-calc/v/0.8.0>`_

      **npm**:

      .. code-block:: console

         $ npm i jsii-calc@0.8.0

      **package.json**:

      .. code-block:: js

         {
           "jsii-calc": "^0.8.0"
         }

      **yarn**:

      .. code-block:: console

         $ yarn add jsii-calc@0.8.0



.. py:module:: jsii-calc

AbstractClass
^^^^^^^^^^^^^

.. py:class:: AbstractClass()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AbstractClass;

      .. code-tab:: javascript

         const { AbstractClass } = require('jsii-calc');

      .. code-tab:: typescript

         import { AbstractClass } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.AbstractClassBase`\ 
   :implements: :py:class:`~jsii-calc.InterfaceImplementedByAbstractClass`\ 
   :abstract: Yes

   .. py:method:: abstractMethod(name) -> string

      :param name: 
      :type name: string
      :rtype: string
      :abstract: Yes


   .. py:method:: nonAbstractMethod() -> number

      :rtype: number


   .. py:attribute:: propFromInterface

      *Implements* :py:meth:`jsii-calc.InterfaceImplementedByAbstractClass.propFromInterface`

      :type: string *(readonly)*


   .. py:attribute:: abstractProperty

      *Inherited from* :py:attr:`jsii-calc.AbstractClassBase <jsii-calc.AbstractClassBase.abstractProperty>`

      :type: string *(readonly)* *(abstract)*


AbstractClassBase
^^^^^^^^^^^^^^^^^

.. py:class:: AbstractClassBase()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AbstractClassBase;

      .. code-tab:: javascript

         const { AbstractClassBase } = require('jsii-calc');

      .. code-tab:: typescript

         import { AbstractClassBase } from 'jsii-calc';



   :abstract: Yes

   .. py:attribute:: abstractProperty

      :type: string *(readonly)* *(abstract)*


AbstractClassReturner
^^^^^^^^^^^^^^^^^^^^^

.. py:class:: AbstractClassReturner()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AbstractClassReturner;

      .. code-tab:: javascript

         const { AbstractClassReturner } = require('jsii-calc');

      .. code-tab:: typescript

         import { AbstractClassReturner } from 'jsii-calc';




   .. py:method:: giveMeAbstract() -> jsii-calc.AbstractClass

      :rtype: :py:class:`~jsii-calc.AbstractClass`\ 


   .. py:method:: giveMeInterface() -> jsii-calc.InterfaceImplementedByAbstractClass

      :rtype: :py:class:`~jsii-calc.InterfaceImplementedByAbstractClass`\ 


   .. py:attribute:: returnAbstractFromProperty

      :type: :py:class:`~jsii-calc.AbstractClassBase`\  *(readonly)*


Add
^^^

.. py:class:: Add(lhs, rhs)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Add;

      .. code-tab:: javascript

         const { Add } = require('jsii-calc');

      .. code-tab:: typescript

         import { Add } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.BinaryOperation`\ 
   :param lhs: 
   :type lhs: :py:class:`@scope/jsii-calc-lib.Value`\ 
   :param rhs: 
   :type rhs: :py:class:`@scope/jsii-calc-lib.Value`\ 

   .. py:method:: toString() -> string

      *Implements* :py:meth:`@scope/jsii-calc-lib.Operation.toString`

      :rtype: string


   .. py:attribute:: value

      *Implements* :py:meth:`@scope/jsii-calc-lib.Value.value`

      :type: number *(readonly)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: hello() -> string

      *Inherited from* :py:meth:`jsii-calc.BinaryOperation <jsii-calc.BinaryOperation.hello>`

      :rtype: string


   .. py:attribute:: lhs

      *Inherited from* :py:attr:`jsii-calc.BinaryOperation <jsii-calc.BinaryOperation.lhs>`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:attribute:: rhs

      *Inherited from* :py:attr:`jsii-calc.BinaryOperation <jsii-calc.BinaryOperation.rhs>`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


AllTypes
^^^^^^^^

.. py:class:: AllTypes()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AllTypes;

      .. code-tab:: javascript

         const { AllTypes } = require('jsii-calc');

      .. code-tab:: typescript

         import { AllTypes } from 'jsii-calc';




   .. py:method:: enumMethod(value) -> jsii-calc.StringEnum

      :param value: 
      :type value: :py:class:`~jsii-calc.StringEnum`\ 
      :rtype: :py:class:`~jsii-calc.StringEnum`\ 


   .. py:attribute:: enumPropertyValue

      :type: number *(readonly)*


   .. py:attribute:: anyArrayProperty

      :type: any[]


   .. py:attribute:: anyMapProperty

      :type: string => any


   .. py:attribute:: anyProperty

      :type: any


   .. py:attribute:: arrayProperty

      :type: string[]


   .. py:attribute:: booleanProperty

      :type: boolean


   .. py:attribute:: dateProperty

      :type: date


   .. py:attribute:: enumProperty

      :type: :py:class:`~jsii-calc.AllTypesEnum`\ 


   .. py:attribute:: jsonProperty

      :type: json


   .. py:attribute:: mapProperty

      :type: string => :py:class:`@scope/jsii-calc-lib.Number`\ 


   .. py:attribute:: numberProperty

      :type: number


   .. py:attribute:: stringProperty

      :type: string


   .. py:attribute:: unionArrayProperty

      :type: (number or :py:class:`~jsii-calc.composition.CompositeOperation`\ )[]


   .. py:attribute:: unionMapProperty

      :type: string => (string or number or :py:class:`@scope/jsii-calc-lib.Number`\ )


   .. py:attribute:: unionProperty

      :type: string or number or :py:class:`~jsii-calc.Multiply`\  or :py:class:`@scope/jsii-calc-lib.Number`\ 


   .. py:attribute:: unknownArrayProperty

      :type: any[]


   .. py:attribute:: unknownMapProperty

      :type: string => any


   .. py:attribute:: unknownProperty

      :type: any


   .. py:attribute:: optionalEnumValue

      :type: :py:class:`~jsii-calc.StringEnum`\  *(optional)*


AllTypesEnum (enum)
^^^^^^^^^^^^^^^^^^^

.. py:class:: AllTypesEnum

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AllTypesEnum;

      .. code-tab:: javascript

         const { AllTypesEnum } = require('jsii-calc');

      .. code-tab:: typescript

         import { AllTypesEnum } from 'jsii-calc';



   .. py:data:: MyEnumValue

   .. py:data:: YourEnumValue

   .. py:data:: ThisIsGreat


AllowedMethodNames
^^^^^^^^^^^^^^^^^^

.. py:class:: AllowedMethodNames()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AllowedMethodNames;

      .. code-tab:: javascript

         const { AllowedMethodNames } = require('jsii-calc');

      .. code-tab:: typescript

         import { AllowedMethodNames } from 'jsii-calc';




   .. py:method:: getBar(_p1, _p2)

      :param _p1: 
      :type _p1: string
      :param _p2: 
      :type _p2: number


   .. py:method:: getFoo(withParam) -> string

      :param withParam: 
      :type withParam: string
      :rtype: string


   .. py:method:: setBar(_x, _y, _z)

      :param _x: 
      :type _x: string
      :param _y: 
      :type _y: number
      :param _z: 
      :type _z: boolean


   .. py:method:: setFoo(_x, _y)

      :param _x: 
      :type _x: string
      :param _y: 
      :type _y: number


AsyncVirtualMethods
^^^^^^^^^^^^^^^^^^^

.. py:class:: AsyncVirtualMethods()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AsyncVirtualMethods;

      .. code-tab:: javascript

         const { AsyncVirtualMethods } = require('jsii-calc');

      .. code-tab:: typescript

         import { AsyncVirtualMethods } from 'jsii-calc';




   .. py:method:: callMe() -> number

      :rtype: number


   .. py:method:: callMe2() -> number

      :rtype: number


   .. py:method:: callMeDoublePromise() -> number

      :rtype: number


   .. py:method:: dontOverrideMe() -> number

      :rtype: number


   .. py:method:: overrideMe(mult) -> number

      :param mult: 
      :type mult: number
      :rtype: number


   .. py:method:: overrideMeToo() -> number

      :rtype: number


AugmentableClass
^^^^^^^^^^^^^^^^

.. py:class:: AugmentableClass()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.AugmentableClass;

      .. code-tab:: javascript

         const { AugmentableClass } = require('jsii-calc');

      .. code-tab:: typescript

         import { AugmentableClass } from 'jsii-calc';




   .. py:method:: methodOne()



   .. py:method:: methodTwo()



BinaryOperation
^^^^^^^^^^^^^^^

.. py:class:: BinaryOperation(lhs, rhs)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.BinaryOperation;

      .. code-tab:: javascript

         const { BinaryOperation } = require('jsii-calc');

      .. code-tab:: typescript

         import { BinaryOperation } from 'jsii-calc';



   :extends: :py:class:`@scope/jsii-calc-lib.Operation`\ 
   :implements: :py:class:`@scope/jsii-calc-lib.IFriendly`\ 
   :abstract: Yes
   :param lhs: 
   :type lhs: :py:class:`@scope/jsii-calc-lib.Value`\ 
   :param rhs: 
   :type rhs: :py:class:`@scope/jsii-calc-lib.Value`\ 

   .. py:method:: hello() -> string

      *Implements* :py:meth:`@scope/jsii-calc-lib.IFriendly.hello`

      :rtype: string


   .. py:attribute:: lhs

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:attribute:: rhs

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: toString() -> string

      *Inherited from* :py:meth:`@scope/jsii-calc-lib.Operation <@scope/jsii-calc-lib.Operation.toString>`

      :rtype: string
      :abstract: Yes


   .. py:attribute:: value

      *Inherited from* :py:attr:`@scope/jsii-calc-lib.Value <@scope/jsii-calc-lib.Value.value>`

      :type: number *(readonly)* *(abstract)*


Calculator
^^^^^^^^^^

.. py:class:: Calculator([props])

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Calculator;

      .. code-tab:: javascript

         const { Calculator } = require('jsii-calc');

      .. code-tab:: typescript

         import { Calculator } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.composition.CompositeOperation`\ 
   :param props: 
   :type props: :py:class:`~jsii-calc.CalculatorProps`\  *(optional)*

   .. py:method:: add(value)

      :param value: 
      :type value: number


   .. py:method:: mul(value)

      :param value: 
      :type value: number


   .. py:method:: neg()



   .. py:method:: pow(value)

      :param value: 
      :type value: number


   .. py:method:: readUnionValue() -> number

      :rtype: number


   .. py:attribute:: expression

      *Implements* :py:meth:`jsii-calc.composition.CompositeOperation.expression`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:attribute:: operationsLog

      :type: :py:class:`@scope/jsii-calc-lib.Value`\ [] *(readonly)*


   .. py:attribute:: operationsMap

      :type: string => :py:class:`@scope/jsii-calc-lib.Value`\ [] *(readonly)*


   .. py:attribute:: curr

      :type: :py:class:`@scope/jsii-calc-lib.Value`\ 


   .. py:attribute:: maxValue

      :type: number *(optional)*


   .. py:attribute:: unionProperty

      :type: :py:class:`~jsii-calc.Add`\  or :py:class:`~jsii-calc.Multiply`\  or :py:class:`~jsii-calc.Power`\  *(optional)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: toString() -> string

      *Inherited from* :py:meth:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.toString>`

      :rtype: string


   .. py:attribute:: value

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.value>`

      :type: number *(readonly)*


   .. py:attribute:: decorationPostfixes

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.decorationPostfixes>`

      :type: string[]


   .. py:attribute:: decorationPrefixes

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.decorationPrefixes>`

      :type: string[]


   .. py:attribute:: stringStyle

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.stringStyle>`

      :type: :py:class:`~jsii-calc.composition.CompositeOperation.CompositionStringStyle`\ 


CalculatorProps (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: CalculatorProps

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.CalculatorProps;

      .. code-tab:: javascript

         // CalculatorProps is an interface

      .. code-tab:: typescript

         import { CalculatorProps } from 'jsii-calc';





   .. py:attribute:: initialValue

      :type: number *(optional)* *(readonly)*


   .. py:attribute:: maximumValue

      :type: number *(optional)* *(readonly)*


ClassThatImplementsTheInternalInterface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ClassThatImplementsTheInternalInterface()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ClassThatImplementsTheInternalInterface;

      .. code-tab:: javascript

         const { ClassThatImplementsTheInternalInterface } = require('jsii-calc');

      .. code-tab:: typescript

         import { ClassThatImplementsTheInternalInterface } from 'jsii-calc';



   :implements: :py:class:`~jsii-calc.INonInternalInterface`\ 

   .. py:attribute:: a

      *Implements* :py:meth:`jsii-calc.IAnotherPublicInterface.a`

      :type: string


   .. py:attribute:: b

      :type: string


   .. py:attribute:: c

      *Implements* :py:meth:`jsii-calc.INonInternalInterface.c`

      :type: string


   .. py:attribute:: d

      :type: string


ClassThatImplementsThePrivateInterface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ClassThatImplementsThePrivateInterface()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ClassThatImplementsThePrivateInterface;

      .. code-tab:: javascript

         const { ClassThatImplementsThePrivateInterface } = require('jsii-calc');

      .. code-tab:: typescript

         import { ClassThatImplementsThePrivateInterface } from 'jsii-calc';



   :implements: :py:class:`~jsii-calc.INonInternalInterface`\ 

   .. py:attribute:: a

      *Implements* :py:meth:`jsii-calc.IAnotherPublicInterface.a`

      :type: string


   .. py:attribute:: b

      :type: string


   .. py:attribute:: c

      *Implements* :py:meth:`jsii-calc.INonInternalInterface.c`

      :type: string


   .. py:attribute:: e

      :type: string


ClassWithMutableObjectLiteralProperty
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ClassWithMutableObjectLiteralProperty()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ClassWithMutableObjectLiteralProperty;

      .. code-tab:: javascript

         const { ClassWithMutableObjectLiteralProperty } = require('jsii-calc');

      .. code-tab:: typescript

         import { ClassWithMutableObjectLiteralProperty } from 'jsii-calc';




   .. py:attribute:: mutableObject

      :type: :py:class:`~jsii-calc.IMutableObjectLiteral`\ 


ClassWithPrivateConstructorAndAutomaticProperties
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ClassWithPrivateConstructorAndAutomaticProperties

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ClassWithPrivateConstructorAndAutomaticProperties;

      .. code-tab:: javascript

         const { ClassWithPrivateConstructorAndAutomaticProperties } = require('jsii-calc');

      .. code-tab:: typescript

         import { ClassWithPrivateConstructorAndAutomaticProperties } from 'jsii-calc';



   :implements: :py:class:`~jsii-calc.IInterfaceWithProperties`\ 

   .. py:staticmethod:: create(readOnlyString, readWriteString) -> jsii-calc.ClassWithPrivateConstructorAndAutomaticProperties

      :param readOnlyString: 
      :type readOnlyString: string
      :param readWriteString: 
      :type readWriteString: string
      :rtype: :py:class:`~jsii-calc.ClassWithPrivateConstructorAndAutomaticProperties`\ 


   .. py:attribute:: readOnlyString

      *Implements* :py:meth:`jsii-calc.IInterfaceWithProperties.readOnlyString`

      :type: string *(readonly)*


   .. py:attribute:: readWriteString

      *Implements* :py:meth:`jsii-calc.IInterfaceWithProperties.readWriteString`

      :type: string


Constructors
^^^^^^^^^^^^

.. py:class:: Constructors()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Constructors;

      .. code-tab:: javascript

         const { Constructors } = require('jsii-calc');

      .. code-tab:: typescript

         import { Constructors } from 'jsii-calc';




   .. py:staticmethod:: makeClass() -> jsii-calc.PublicClass

      :rtype: :py:class:`~jsii-calc.PublicClass`\ 


   .. py:staticmethod:: makeInterface() -> jsii-calc.IPublicInterface

      :rtype: :py:class:`~jsii-calc.IPublicInterface`\ 


ConsumersOfThisCrazyTypeSystem
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ConsumersOfThisCrazyTypeSystem()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ConsumersOfThisCrazyTypeSystem;

      .. code-tab:: javascript

         const { ConsumersOfThisCrazyTypeSystem } = require('jsii-calc');

      .. code-tab:: typescript

         import { ConsumersOfThisCrazyTypeSystem } from 'jsii-calc';




   .. py:method:: consumeAnotherPublicInterface(obj) -> string

      :param obj: 
      :type obj: :py:class:`~jsii-calc.IAnotherPublicInterface`\ 
      :rtype: string


   .. py:method:: consumeNonInternalInterface(obj) -> any

      :param obj: 
      :type obj: :py:class:`~jsii-calc.INonInternalInterface`\ 
      :rtype: any


DefaultedConstructorArgument
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: DefaultedConstructorArgument([arg1, [arg2, [arg3]]])

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DefaultedConstructorArgument;

      .. code-tab:: javascript

         const { DefaultedConstructorArgument } = require('jsii-calc');

      .. code-tab:: typescript

         import { DefaultedConstructorArgument } from 'jsii-calc';



   :param arg1: 
   :type arg1: number *(optional)*
   :param arg2: 
   :type arg2: string *(optional)*
   :param arg3: 
   :type arg3: date *(optional)*

   .. py:attribute:: arg1

      :type: number *(readonly)*


   .. py:attribute:: arg3

      :type: date *(readonly)*


   .. py:attribute:: arg2

      :type: string *(optional)* *(readonly)*



DerivedClassHasNoProperties
^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. py:module:: jsii-calc.DerivedClassHasNoProperties

Base
~~~~

.. py:class:: Base()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DerivedClassHasNoProperties.Base;

      .. code-tab:: javascript

         const { DerivedClassHasNoProperties.Base } = require('jsii-calc');

      .. code-tab:: typescript

         import { DerivedClassHasNoProperties.Base } from 'jsii-calc';




   .. py:attribute:: prop

      :type: string


Derived
~~~~~~~

.. py:class:: Derived()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DerivedClassHasNoProperties.Derived;

      .. code-tab:: javascript

         const { DerivedClassHasNoProperties.Derived } = require('jsii-calc');

      .. code-tab:: typescript

         import { DerivedClassHasNoProperties.Derived } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.DerivedClassHasNoProperties.Base`\ 

   .. py:attribute:: prop

      *Inherited from* :py:attr:`jsii-calc.DerivedClassHasNoProperties.Base <jsii-calc.DerivedClassHasNoProperties.Base.prop>`

      :type: string



.. py:currentmodule:: jsii-calc

DerivedStruct (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: DerivedStruct

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DerivedStruct;

      .. code-tab:: javascript

         // DerivedStruct is an interface

      .. code-tab:: typescript

         import { DerivedStruct } from 'jsii-calc';



   :extends: :py:class:`@scope/jsii-calc-lib.MyFirstStruct`\ 


   .. py:attribute:: anotherRequired

      :type: date *(readonly)*


   .. py:attribute:: bool

      :type: boolean *(readonly)*


   .. py:attribute:: nonPrimitive

      :type: :py:class:`~jsii-calc.DoubleTrouble`\  *(readonly)*


   .. py:attribute:: anotherOptional

      :type: string => :py:class:`@scope/jsii-calc-lib.Value`\  *(optional)* *(readonly)*


   .. py:attribute:: optionalAny

      :type: any *(optional)* *(readonly)*


   .. py:attribute:: optionalArray

      :type: string[] *(optional)* *(readonly)*


   .. py:attribute:: anumber

      *Inherited from* :py:attr:`@scope/jsii-calc-lib.MyFirstStruct <@scope/jsii-calc-lib.MyFirstStruct.anumber>`

      :type: number *(readonly)*


   .. py:attribute:: astring

      *Inherited from* :py:attr:`@scope/jsii-calc-lib.MyFirstStruct <@scope/jsii-calc-lib.MyFirstStruct.astring>`

      :type: string *(readonly)*


   .. py:attribute:: firstOptional

      *Inherited from* :py:attr:`@scope/jsii-calc-lib.MyFirstStruct <@scope/jsii-calc-lib.MyFirstStruct.firstOptional>`

      :type: string[] *(optional)* *(readonly)*


DoNotOverridePrivates
^^^^^^^^^^^^^^^^^^^^^

.. py:class:: DoNotOverridePrivates()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DoNotOverridePrivates;

      .. code-tab:: javascript

         const { DoNotOverridePrivates } = require('jsii-calc');

      .. code-tab:: typescript

         import { DoNotOverridePrivates } from 'jsii-calc';




   .. py:method:: changePrivatePropertyValue(newValue)

      :param newValue: 
      :type newValue: string


   .. py:method:: privateMethodValue() -> string

      :rtype: string


   .. py:method:: privatePropertyValue() -> string

      :rtype: string


DoNotRecognizeAnyAsOptional
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: DoNotRecognizeAnyAsOptional()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DoNotRecognizeAnyAsOptional;

      .. code-tab:: javascript

         const { DoNotRecognizeAnyAsOptional } = require('jsii-calc');

      .. code-tab:: typescript

         import { DoNotRecognizeAnyAsOptional } from 'jsii-calc';




   .. py:method:: method(_requiredAny, [_optionalAny, [_optionalString]])

      :param _requiredAny: 
      :type _requiredAny: any
      :param _optionalAny: 
      :type _optionalAny: any *(optional)*
      :param _optionalString: 
      :type _optionalString: string *(optional)*


DocumentedClass
^^^^^^^^^^^^^^^

.. py:class:: DocumentedClass()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DocumentedClass;

      .. code-tab:: javascript

         const { DocumentedClass } = require('jsii-calc');

      .. code-tab:: typescript

         import { DocumentedClass } from 'jsii-calc';




   .. py:method:: greet([greetee]) -> number

      :param greetee: 
      :type greetee: :py:class:`~jsii-calc.Greetee`\  *(optional)*
      :rtype: number


DontComplainAboutVariadicAfterOptional
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: DontComplainAboutVariadicAfterOptional()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DontComplainAboutVariadicAfterOptional;

      .. code-tab:: javascript

         const { DontComplainAboutVariadicAfterOptional } = require('jsii-calc');

      .. code-tab:: typescript

         import { DontComplainAboutVariadicAfterOptional } from 'jsii-calc';




   .. py:method:: optionalAndVariadic(optional, *things) -> string

      :param optional: 
      :type optional: string *(optional)*
      :param \*things: 
      :type \*things: string
      :rtype: string


DoubleTrouble
^^^^^^^^^^^^^

.. py:class:: DoubleTrouble()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.DoubleTrouble;

      .. code-tab:: javascript

         const { DoubleTrouble } = require('jsii-calc');

      .. code-tab:: typescript

         import { DoubleTrouble } from 'jsii-calc';



   :implements: :py:class:`~jsii-calc.IFriendlyRandomGenerator`\ 

   .. py:method:: hello() -> string

      *Implements* :py:meth:`@scope/jsii-calc-lib.IFriendly.hello`

      :rtype: string


   .. py:method:: next() -> number

      *Implements* :py:meth:`jsii-calc.IRandomNumberGenerator.next`

      :rtype: number


EraseUndefinedHashValues
^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: EraseUndefinedHashValues()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.EraseUndefinedHashValues;

      .. code-tab:: javascript

         const { EraseUndefinedHashValues } = require('jsii-calc');

      .. code-tab:: typescript

         import { EraseUndefinedHashValues } from 'jsii-calc';




   .. py:staticmethod:: doesKeyExist(opts, key) -> boolean

      :param opts: 
      :type opts: :py:class:`~jsii-calc.EraseUndefinedHashValuesOptions`\ 
      :param key: 
      :type key: string
      :rtype: boolean


   .. py:staticmethod:: prop1IsNull() -> any

      :rtype: any


   .. py:staticmethod:: prop2IsUndefined() -> any

      :rtype: any


EraseUndefinedHashValuesOptions (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: EraseUndefinedHashValuesOptions

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.EraseUndefinedHashValuesOptions;

      .. code-tab:: javascript

         // EraseUndefinedHashValuesOptions is an interface

      .. code-tab:: typescript

         import { EraseUndefinedHashValuesOptions } from 'jsii-calc';





   .. py:attribute:: option1

      :type: string *(optional)* *(readonly)*


   .. py:attribute:: option2

      :type: string *(optional)* *(readonly)*


ExportedBaseClass
^^^^^^^^^^^^^^^^^

.. py:class:: ExportedBaseClass(success)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ExportedBaseClass;

      .. code-tab:: javascript

         const { ExportedBaseClass } = require('jsii-calc');

      .. code-tab:: typescript

         import { ExportedBaseClass } from 'jsii-calc';



   :param success: 
   :type success: boolean

   .. py:attribute:: success

      :type: boolean *(readonly)*


ExtendsInternalInterface (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ExtendsInternalInterface

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ExtendsInternalInterface;

      .. code-tab:: javascript

         // ExtendsInternalInterface is an interface

      .. code-tab:: typescript

         import { ExtendsInternalInterface } from 'jsii-calc';





   .. py:attribute:: boom

      :type: boolean *(readonly)*


ExtendsPrivateInterface (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ExtendsPrivateInterface

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ExtendsPrivateInterface;

      .. code-tab:: javascript

         // ExtendsPrivateInterface is an interface

      .. code-tab:: typescript

         import { ExtendsPrivateInterface } from 'jsii-calc';





   .. py:attribute:: moreThings

      :type: string[] *(readonly)*


GiveMeStructs
^^^^^^^^^^^^^

.. py:class:: GiveMeStructs()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.GiveMeStructs;

      .. code-tab:: javascript

         const { GiveMeStructs } = require('jsii-calc');

      .. code-tab:: typescript

         import { GiveMeStructs } from 'jsii-calc';




   .. py:method:: derivedToFirst(derived) -> @scope/jsii-calc-lib.MyFirstStruct

      :param derived: 
      :type derived: :py:class:`~jsii-calc.DerivedStruct`\ 
      :rtype: :py:class:`@scope/jsii-calc-lib.MyFirstStruct`\ 


   .. py:method:: readDerivedNonPrimitive(derived) -> jsii-calc.DoubleTrouble

      :param derived: 
      :type derived: :py:class:`~jsii-calc.DerivedStruct`\ 
      :rtype: :py:class:`~jsii-calc.DoubleTrouble`\ 


   .. py:method:: readFirstNumber(first) -> number

      :param first: 
      :type first: :py:class:`@scope/jsii-calc-lib.MyFirstStruct`\ 
      :rtype: number


   .. py:attribute:: structLiteral

      :type: :py:class:`@scope/jsii-calc-lib.StructWithOnlyOptionals`\  *(readonly)*


Greetee (interface)
^^^^^^^^^^^^^^^^^^^

.. py:class:: Greetee

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Greetee;

      .. code-tab:: javascript

         // Greetee is an interface

      .. code-tab:: typescript

         import { Greetee } from 'jsii-calc';





   .. py:attribute:: name

      :type: string *(optional)* *(readonly)*


GreetingAugmenter
^^^^^^^^^^^^^^^^^

.. py:class:: GreetingAugmenter()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.GreetingAugmenter;

      .. code-tab:: javascript

         const { GreetingAugmenter } = require('jsii-calc');

      .. code-tab:: typescript

         import { GreetingAugmenter } from 'jsii-calc';




   .. py:method:: betterGreeting(friendly) -> string

      :param friendly: 
      :type friendly: :py:class:`@scope/jsii-calc-lib.IFriendly`\ 
      :rtype: string


IAnotherPublicInterface (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IAnotherPublicInterface

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IAnotherPublicInterface;

      .. code-tab:: javascript

         // IAnotherPublicInterface is an interface

      .. code-tab:: typescript

         import { IAnotherPublicInterface } from 'jsii-calc';





   .. py:attribute:: a

      :type: string


IFriendlier (interface)
^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IFriendlier

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IFriendlier;

      .. code-tab:: javascript

         // IFriendlier is an interface

      .. code-tab:: typescript

         import { IFriendlier } from 'jsii-calc';



   :extends: :py:class:`@scope/jsii-calc-lib.IFriendly`\ 


   .. py:method:: farewell() -> string

      :rtype: string
      :abstract: Yes


   .. py:method:: goodbye() -> string

      :rtype: string
      :abstract: Yes


   .. py:method:: hello() -> string

      *Inherited from* :py:meth:`@scope/jsii-calc-lib.IFriendly <@scope/jsii-calc-lib.IFriendly.hello>`

      :rtype: string
      :abstract: Yes


IFriendlyRandomGenerator (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IFriendlyRandomGenerator

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IFriendlyRandomGenerator;

      .. code-tab:: javascript

         // IFriendlyRandomGenerator is an interface

      .. code-tab:: typescript

         import { IFriendlyRandomGenerator } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.IRandomNumberGenerator`\ 
   :extends: :py:class:`@scope/jsii-calc-lib.IFriendly`\ 


   .. py:method:: hello() -> string

      *Inherited from* :py:meth:`@scope/jsii-calc-lib.IFriendly <@scope/jsii-calc-lib.IFriendly.hello>`

      :rtype: string
      :abstract: Yes


   .. py:method:: next() -> number

      *Inherited from* :py:meth:`jsii-calc.IRandomNumberGenerator <jsii-calc.IRandomNumberGenerator.next>`

      :rtype: number
      :abstract: Yes


IInterfaceThatShouldNotBeADataType (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IInterfaceThatShouldNotBeADataType

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IInterfaceThatShouldNotBeADataType;

      .. code-tab:: javascript

         // IInterfaceThatShouldNotBeADataType is an interface

      .. code-tab:: typescript

         import { IInterfaceThatShouldNotBeADataType } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.IInterfaceWithMethods`\ 


   .. py:attribute:: otherValue

      :type: string *(readonly)*


   .. py:method:: doThings()

      *Inherited from* :py:meth:`jsii-calc.IInterfaceWithMethods <jsii-calc.IInterfaceWithMethods.doThings>`

      :abstract: Yes


   .. py:attribute:: value

      *Inherited from* :py:attr:`jsii-calc.IInterfaceWithMethods <jsii-calc.IInterfaceWithMethods.value>`

      :type: string *(readonly)*


IInterfaceWithInternal (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IInterfaceWithInternal

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IInterfaceWithInternal;

      .. code-tab:: javascript

         // IInterfaceWithInternal is an interface

      .. code-tab:: typescript

         import { IInterfaceWithInternal } from 'jsii-calc';





   .. py:method:: visible()

      :abstract: Yes


IInterfaceWithMethods (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IInterfaceWithMethods

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IInterfaceWithMethods;

      .. code-tab:: javascript

         // IInterfaceWithMethods is an interface

      .. code-tab:: typescript

         import { IInterfaceWithMethods } from 'jsii-calc';





   .. py:attribute:: value

      :type: string *(readonly)*


   .. py:method:: doThings()

      :abstract: Yes


IInterfaceWithOptionalMethodArguments (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IInterfaceWithOptionalMethodArguments

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IInterfaceWithOptionalMethodArguments;

      .. code-tab:: javascript

         // IInterfaceWithOptionalMethodArguments is an interface

      .. code-tab:: typescript

         import { IInterfaceWithOptionalMethodArguments } from 'jsii-calc';





   .. py:method:: hello(arg1, [arg2])

      :param arg1: 
      :type arg1: string
      :param arg2: 
      :type arg2: number *(optional)*
      :abstract: Yes


IInterfaceWithProperties (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IInterfaceWithProperties

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IInterfaceWithProperties;

      .. code-tab:: javascript

         // IInterfaceWithProperties is an interface

      .. code-tab:: typescript

         import { IInterfaceWithProperties } from 'jsii-calc';





   .. py:attribute:: readOnlyString

      :type: string *(readonly)*


   .. py:attribute:: readWriteString

      :type: string


IInterfaceWithPropertiesExtension (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IInterfaceWithPropertiesExtension

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IInterfaceWithPropertiesExtension;

      .. code-tab:: javascript

         // IInterfaceWithPropertiesExtension is an interface

      .. code-tab:: typescript

         import { IInterfaceWithPropertiesExtension } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.IInterfaceWithProperties`\ 


   .. py:attribute:: foo

      :type: number


   .. py:attribute:: readOnlyString

      *Inherited from* :py:attr:`jsii-calc.IInterfaceWithProperties <jsii-calc.IInterfaceWithProperties.readOnlyString>`

      :type: string *(readonly)*


   .. py:attribute:: readWriteString

      *Inherited from* :py:attr:`jsii-calc.IInterfaceWithProperties <jsii-calc.IInterfaceWithProperties.readWriteString>`

      :type: string


IMutableObjectLiteral (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IMutableObjectLiteral

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IMutableObjectLiteral;

      .. code-tab:: javascript

         // IMutableObjectLiteral is an interface

      .. code-tab:: typescript

         import { IMutableObjectLiteral } from 'jsii-calc';





   .. py:attribute:: value

      :type: string


INonInternalInterface (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: INonInternalInterface

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.INonInternalInterface;

      .. code-tab:: javascript

         // INonInternalInterface is an interface

      .. code-tab:: typescript

         import { INonInternalInterface } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.IAnotherPublicInterface`\ 


   .. py:attribute:: c

      :type: string


   .. py:attribute:: a

      *Inherited from* :py:attr:`jsii-calc.IAnotherPublicInterface <jsii-calc.IAnotherPublicInterface.a>`

      :type: string


IPrivatelyImplemented (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IPrivatelyImplemented

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IPrivatelyImplemented;

      .. code-tab:: javascript

         // IPrivatelyImplemented is an interface

      .. code-tab:: typescript

         import { IPrivatelyImplemented } from 'jsii-calc';





   .. py:attribute:: success

      :type: boolean *(readonly)*


IPublicInterface (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IPublicInterface

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IPublicInterface;

      .. code-tab:: javascript

         // IPublicInterface is an interface

      .. code-tab:: typescript

         import { IPublicInterface } from 'jsii-calc';





   .. py:method:: bye()

      :abstract: Yes


IRandomNumberGenerator (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IRandomNumberGenerator

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IRandomNumberGenerator;

      .. code-tab:: javascript

         // IRandomNumberGenerator is an interface

      .. code-tab:: typescript

         import { IRandomNumberGenerator } from 'jsii-calc';





   .. py:method:: next() -> number

      :rtype: number
      :abstract: Yes


IReturnsNumber (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IReturnsNumber

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.IReturnsNumber;

      .. code-tab:: javascript

         // IReturnsNumber is an interface

      .. code-tab:: typescript

         import { IReturnsNumber } from 'jsii-calc';





   .. py:attribute:: numberProp

      :type: :py:class:`@scope/jsii-calc-lib.Number`\  *(readonly)*


   .. py:method:: obtainNumber() -> @scope/jsii-calc-lib.IDoublable

      :rtype: :py:class:`@scope/jsii-calc-lib.IDoublable`\ 
      :abstract: Yes


ImplementInternalInterface
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ImplementInternalInterface()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ImplementInternalInterface;

      .. code-tab:: javascript

         const { ImplementInternalInterface } = require('jsii-calc');

      .. code-tab:: typescript

         import { ImplementInternalInterface } from 'jsii-calc';




   .. py:attribute:: prop

      :type: string


ImplementsInterfaceWithInternal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ImplementsInterfaceWithInternal()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ImplementsInterfaceWithInternal;

      .. code-tab:: javascript

         const { ImplementsInterfaceWithInternal } = require('jsii-calc');

      .. code-tab:: typescript

         import { ImplementsInterfaceWithInternal } from 'jsii-calc';



   :implements: :py:class:`~jsii-calc.IInterfaceWithInternal`\ 

   .. py:method:: visible()

      *Implements* :py:meth:`jsii-calc.IInterfaceWithInternal.visible`



ImplementsInterfaceWithInternalSubclass
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ImplementsInterfaceWithInternalSubclass()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ImplementsInterfaceWithInternalSubclass;

      .. code-tab:: javascript

         const { ImplementsInterfaceWithInternalSubclass } = require('jsii-calc');

      .. code-tab:: typescript

         import { ImplementsInterfaceWithInternalSubclass } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.ImplementsInterfaceWithInternal`\ 

   .. py:method:: visible()

      *Inherited from* :py:meth:`jsii-calc.ImplementsInterfaceWithInternal <jsii-calc.ImplementsInterfaceWithInternal.visible>`



ImplementsPrivateInterface
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ImplementsPrivateInterface()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ImplementsPrivateInterface;

      .. code-tab:: javascript

         const { ImplementsPrivateInterface } = require('jsii-calc');

      .. code-tab:: typescript

         import { ImplementsPrivateInterface } from 'jsii-calc';




   .. py:attribute:: private

      :type: string


ImplictBaseOfBase (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ImplictBaseOfBase

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ImplictBaseOfBase;

      .. code-tab:: javascript

         // ImplictBaseOfBase is an interface

      .. code-tab:: typescript

         import { ImplictBaseOfBase } from 'jsii-calc';



   :extends: :py:class:`@scope/jsii-calc-base.BaseProps`\ 


   .. py:attribute:: goo

      :type: date *(readonly)*


   .. py:attribute:: foo

      *Inherited from* :py:attr:`@scope/jsii-calc-base-of-base.VeryBaseProps <@scope/jsii-calc-base-of-base.VeryBaseProps.foo>`

      :type: :py:class:`@scope/jsii-calc-base-of-base.Very`\  *(readonly)*


   .. py:attribute:: bar

      *Inherited from* :py:attr:`@scope/jsii-calc-base.BaseProps <@scope/jsii-calc-base.BaseProps.bar>`

      :type: string *(readonly)*


InbetweenClass
^^^^^^^^^^^^^^

.. py:class:: InbetweenClass()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.InbetweenClass;

      .. code-tab:: javascript

         const { InbetweenClass } = require('jsii-calc');

      .. code-tab:: typescript

         import { InbetweenClass } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.PublicClass`\ 

   .. py:method:: hello()

      *Inherited from* :py:meth:`jsii-calc.PublicClass <jsii-calc.PublicClass.hello>`



InterfaceImplementedByAbstractClass (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: InterfaceImplementedByAbstractClass

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.InterfaceImplementedByAbstractClass;

      .. code-tab:: javascript

         // InterfaceImplementedByAbstractClass is an interface

      .. code-tab:: typescript

         import { InterfaceImplementedByAbstractClass } from 'jsii-calc';





   .. py:attribute:: propFromInterface

      :type: string *(readonly)*



InterfaceInNamespaceIncludesClasses
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. py:module:: jsii-calc.InterfaceInNamespaceIncludesClasses

Foo
~~~

.. py:class:: Foo()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.InterfaceInNamespaceIncludesClasses.Foo;

      .. code-tab:: javascript

         const { InterfaceInNamespaceIncludesClasses.Foo } = require('jsii-calc');

      .. code-tab:: typescript

         import { InterfaceInNamespaceIncludesClasses.Foo } from 'jsii-calc';




   .. py:attribute:: bar

      :type: string *(optional)*


Hello (interface)
~~~~~~~~~~~~~~~~~

.. py:class:: Hello

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.InterfaceInNamespaceIncludesClasses.Hello;

      .. code-tab:: javascript

         // InterfaceInNamespaceIncludesClasses.Hello is an interface

      .. code-tab:: typescript

         import { InterfaceInNamespaceIncludesClasses.Hello } from 'jsii-calc';





   .. py:attribute:: foo

      :type: number *(readonly)*



.. py:currentmodule:: jsii-calc


InterfaceInNamespaceOnlyInterface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. py:module:: jsii-calc.InterfaceInNamespaceOnlyInterface

Hello (interface)
~~~~~~~~~~~~~~~~~

.. py:class:: Hello

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.InterfaceInNamespaceOnlyInterface.Hello;

      .. code-tab:: javascript

         // InterfaceInNamespaceOnlyInterface.Hello is an interface

      .. code-tab:: typescript

         import { InterfaceInNamespaceOnlyInterface.Hello } from 'jsii-calc';





   .. py:attribute:: foo

      :type: number *(readonly)*



.. py:currentmodule:: jsii-calc

JSObjectLiteralForInterface
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: JSObjectLiteralForInterface()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.JSObjectLiteralForInterface;

      .. code-tab:: javascript

         const { JSObjectLiteralForInterface } = require('jsii-calc');

      .. code-tab:: typescript

         import { JSObjectLiteralForInterface } from 'jsii-calc';




   .. py:method:: giveMeFriendly() -> @scope/jsii-calc-lib.IFriendly

      :rtype: :py:class:`@scope/jsii-calc-lib.IFriendly`\ 


   .. py:method:: giveMeFriendlyGenerator() -> jsii-calc.IFriendlyRandomGenerator

      :rtype: :py:class:`~jsii-calc.IFriendlyRandomGenerator`\ 


JSObjectLiteralToNative
^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: JSObjectLiteralToNative()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.JSObjectLiteralToNative;

      .. code-tab:: javascript

         const { JSObjectLiteralToNative } = require('jsii-calc');

      .. code-tab:: typescript

         import { JSObjectLiteralToNative } from 'jsii-calc';




   .. py:method:: returnLiteral() -> jsii-calc.JSObjectLiteralToNativeClass

      :rtype: :py:class:`~jsii-calc.JSObjectLiteralToNativeClass`\ 


JSObjectLiteralToNativeClass
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: JSObjectLiteralToNativeClass()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.JSObjectLiteralToNativeClass;

      .. code-tab:: javascript

         const { JSObjectLiteralToNativeClass } = require('jsii-calc');

      .. code-tab:: typescript

         import { JSObjectLiteralToNativeClass } from 'jsii-calc';




   .. py:attribute:: propA

      :type: string


   .. py:attribute:: propB

      :type: number


JavaReservedWords
^^^^^^^^^^^^^^^^^

.. py:class:: JavaReservedWords()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.JavaReservedWords;

      .. code-tab:: javascript

         const { JavaReservedWords } = require('jsii-calc');

      .. code-tab:: typescript

         import { JavaReservedWords } from 'jsii-calc';




   .. py:method:: abstract()



   .. py:method:: assert()



   .. py:method:: boolean()



   .. py:method:: break()



   .. py:method:: byte()



   .. py:method:: case()



   .. py:method:: catch()



   .. py:method:: char()



   .. py:method:: class()



   .. py:method:: const()



   .. py:method:: continue()



   .. py:method:: default()



   .. py:method:: do()



   .. py:method:: double()



   .. py:method:: else()



   .. py:method:: enum()



   .. py:method:: extends()



   .. py:method:: false()



   .. py:method:: final()



   .. py:method:: finally()



   .. py:method:: float()



   .. py:method:: for()



   .. py:method:: goto()



   .. py:method:: if()



   .. py:method:: implements()



   .. py:method:: import()



   .. py:method:: instanceof()



   .. py:method:: int()



   .. py:method:: interface()



   .. py:method:: long()



   .. py:method:: native()



   .. py:method:: new()



   .. py:method:: null()



   .. py:method:: package()



   .. py:method:: private()



   .. py:method:: protected()



   .. py:method:: public()



   .. py:method:: return()



   .. py:method:: short()



   .. py:method:: static()



   .. py:method:: strictfp()



   .. py:method:: super()



   .. py:method:: switch()



   .. py:method:: synchronized()



   .. py:method:: this()



   .. py:method:: throw()



   .. py:method:: throws()



   .. py:method:: transient()



   .. py:method:: true()



   .. py:method:: try()



   .. py:method:: void()



   .. py:method:: volatile()



   .. py:attribute:: while

      :type: string


JsiiAgent
^^^^^^^^^

.. py:class:: JsiiAgent()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.JsiiAgent;

      .. code-tab:: javascript

         const { JsiiAgent } = require('jsii-calc');

      .. code-tab:: typescript

         import { JsiiAgent } from 'jsii-calc';




   .. py:attribute:: jsiiAgent

      :type: string *(optional)* *(readonly)* *(static)*


LoadBalancedFargateServiceProps (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: LoadBalancedFargateServiceProps

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.LoadBalancedFargateServiceProps;

      .. code-tab:: javascript

         // LoadBalancedFargateServiceProps is an interface

      .. code-tab:: typescript

         import { LoadBalancedFargateServiceProps } from 'jsii-calc';





   .. py:attribute:: containerPort

      :type: number *(optional)* *(readonly)*


   .. py:attribute:: cpu

      :type: string *(optional)* *(readonly)*


   .. py:attribute:: memoryMiB

      :type: string *(optional)* *(readonly)*


   .. py:attribute:: publicLoadBalancer

      :type: boolean *(optional)* *(readonly)*


   .. py:attribute:: publicTasks

      :type: boolean *(optional)* *(readonly)*


Multiply
^^^^^^^^

.. py:class:: Multiply(lhs, rhs)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Multiply;

      .. code-tab:: javascript

         const { Multiply } = require('jsii-calc');

      .. code-tab:: typescript

         import { Multiply } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.BinaryOperation`\ 
   :implements: :py:class:`~jsii-calc.IFriendlier`\ 
   :implements: :py:class:`~jsii-calc.IRandomNumberGenerator`\ 
   :param lhs: 
   :type lhs: :py:class:`@scope/jsii-calc-lib.Value`\ 
   :param rhs: 
   :type rhs: :py:class:`@scope/jsii-calc-lib.Value`\ 

   .. py:method:: farewell() -> string

      *Implements* :py:meth:`jsii-calc.IFriendlier.farewell`

      :rtype: string


   .. py:method:: goodbye() -> string

      *Implements* :py:meth:`jsii-calc.IFriendlier.goodbye`

      :rtype: string


   .. py:method:: next() -> number

      *Implements* :py:meth:`jsii-calc.IRandomNumberGenerator.next`

      :rtype: number


   .. py:method:: toString() -> string

      *Implements* :py:meth:`@scope/jsii-calc-lib.Operation.toString`

      :rtype: string


   .. py:attribute:: value

      *Implements* :py:meth:`@scope/jsii-calc-lib.Value.value`

      :type: number *(readonly)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: hello() -> string

      *Inherited from* :py:meth:`jsii-calc.BinaryOperation <jsii-calc.BinaryOperation.hello>`

      :rtype: string


   .. py:attribute:: lhs

      *Inherited from* :py:attr:`jsii-calc.BinaryOperation <jsii-calc.BinaryOperation.lhs>`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:attribute:: rhs

      *Inherited from* :py:attr:`jsii-calc.BinaryOperation <jsii-calc.BinaryOperation.rhs>`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


Negate
^^^^^^

.. py:class:: Negate(operand)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Negate;

      .. code-tab:: javascript

         const { Negate } = require('jsii-calc');

      .. code-tab:: typescript

         import { Negate } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.UnaryOperation`\ 
   :implements: :py:class:`~jsii-calc.IFriendlier`\ 
   :param operand: 
   :type operand: :py:class:`@scope/jsii-calc-lib.Value`\ 

   .. py:method:: farewell() -> string

      *Implements* :py:meth:`jsii-calc.IFriendlier.farewell`

      :rtype: string


   .. py:method:: goodbye() -> string

      *Implements* :py:meth:`jsii-calc.IFriendlier.goodbye`

      :rtype: string


   .. py:method:: hello() -> string

      *Implements* :py:meth:`@scope/jsii-calc-lib.IFriendly.hello`

      :rtype: string


   .. py:method:: toString() -> string

      *Implements* :py:meth:`@scope/jsii-calc-lib.Operation.toString`

      :rtype: string


   .. py:attribute:: value

      *Implements* :py:meth:`@scope/jsii-calc-lib.Value.value`

      :type: number *(readonly)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:attribute:: operand

      *Inherited from* :py:attr:`jsii-calc.UnaryOperation <jsii-calc.UnaryOperation.operand>`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


NodeStandardLibrary
^^^^^^^^^^^^^^^^^^^

.. py:class:: NodeStandardLibrary()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.NodeStandardLibrary;

      .. code-tab:: javascript

         const { NodeStandardLibrary } = require('jsii-calc');

      .. code-tab:: typescript

         import { NodeStandardLibrary } from 'jsii-calc';




   .. py:method:: cryptoSha256() -> string

      :rtype: string


   .. py:method:: fsReadFile() -> string

      :rtype: string


   .. py:method:: fsReadFileSync() -> string

      :rtype: string


   .. py:attribute:: osPlatform

      :type: string *(readonly)*


NullShouldBeTreatedAsUndefined
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: NullShouldBeTreatedAsUndefined(_param1, [optional])

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.NullShouldBeTreatedAsUndefined;

      .. code-tab:: javascript

         const { NullShouldBeTreatedAsUndefined } = require('jsii-calc');

      .. code-tab:: typescript

         import { NullShouldBeTreatedAsUndefined } from 'jsii-calc';



   :param _param1: 
   :type _param1: string
   :param optional: 
   :type optional: any *(optional)*

   .. py:method:: giveMeUndefined([value])

      :param value: 
      :type value: any *(optional)*


   .. py:method:: giveMeUndefinedInsideAnObject(input)

      :param input: 
      :type input: :py:class:`~jsii-calc.NullShouldBeTreatedAsUndefinedData`\ 


   .. py:method:: verifyPropertyIsUndefined()



   .. py:attribute:: changeMeToUndefined

      :type: string *(optional)*


NullShouldBeTreatedAsUndefinedData (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: NullShouldBeTreatedAsUndefinedData

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.NullShouldBeTreatedAsUndefinedData;

      .. code-tab:: javascript

         // NullShouldBeTreatedAsUndefinedData is an interface

      .. code-tab:: typescript

         import { NullShouldBeTreatedAsUndefinedData } from 'jsii-calc';





   .. py:attribute:: arrayWithThreeElementsAndUndefinedAsSecondArgument

      :type: any[] *(readonly)*


   .. py:attribute:: thisShouldBeUndefined

      :type: any *(optional)* *(readonly)*


NumberGenerator
^^^^^^^^^^^^^^^

.. py:class:: NumberGenerator(generator)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.NumberGenerator;

      .. code-tab:: javascript

         const { NumberGenerator } = require('jsii-calc');

      .. code-tab:: typescript

         import { NumberGenerator } from 'jsii-calc';



   :param generator: 
   :type generator: :py:class:`~jsii-calc.IRandomNumberGenerator`\ 

   .. py:method:: isSameGenerator(gen) -> boolean

      :param gen: 
      :type gen: :py:class:`~jsii-calc.IRandomNumberGenerator`\ 
      :rtype: boolean


   .. py:method:: nextTimes100() -> number

      :rtype: number


   .. py:attribute:: generator

      :type: :py:class:`~jsii-calc.IRandomNumberGenerator`\ 


ObjectRefsInCollections
^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ObjectRefsInCollections()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ObjectRefsInCollections;

      .. code-tab:: javascript

         const { ObjectRefsInCollections } = require('jsii-calc');

      .. code-tab:: typescript

         import { ObjectRefsInCollections } from 'jsii-calc';




   .. py:method:: sumFromArray(values) -> number

      :param values: 
      :type values: :py:class:`@scope/jsii-calc-lib.Value`\ []
      :rtype: number


   .. py:method:: sumFromMap(values) -> number

      :param values: 
      :type values: string => :py:class:`@scope/jsii-calc-lib.Value`\ 
      :rtype: number


OptionalConstructorArgument
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: OptionalConstructorArgument(arg1, arg2, [arg3])

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.OptionalConstructorArgument;

      .. code-tab:: javascript

         const { OptionalConstructorArgument } = require('jsii-calc');

      .. code-tab:: typescript

         import { OptionalConstructorArgument } from 'jsii-calc';



   :param arg1: 
   :type arg1: number
   :param arg2: 
   :type arg2: string
   :param arg3: 
   :type arg3: date *(optional)*

   .. py:attribute:: arg1

      :type: number *(readonly)*


   .. py:attribute:: arg2

      :type: string *(readonly)*


   .. py:attribute:: arg3

      :type: date *(optional)* *(readonly)*


OverrideReturnsObject
^^^^^^^^^^^^^^^^^^^^^

.. py:class:: OverrideReturnsObject()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.OverrideReturnsObject;

      .. code-tab:: javascript

         const { OverrideReturnsObject } = require('jsii-calc');

      .. code-tab:: typescript

         import { OverrideReturnsObject } from 'jsii-calc';




   .. py:method:: test(obj) -> number

      :param obj: 
      :type obj: :py:class:`~jsii-calc.IReturnsNumber`\ 
      :rtype: number


Polymorphism
^^^^^^^^^^^^

.. py:class:: Polymorphism()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Polymorphism;

      .. code-tab:: javascript

         const { Polymorphism } = require('jsii-calc');

      .. code-tab:: typescript

         import { Polymorphism } from 'jsii-calc';




   .. py:method:: sayHello(friendly) -> string

      :param friendly: 
      :type friendly: :py:class:`@scope/jsii-calc-lib.IFriendly`\ 
      :rtype: string


Power
^^^^^

.. py:class:: Power(base, pow)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Power;

      .. code-tab:: javascript

         const { Power } = require('jsii-calc');

      .. code-tab:: typescript

         import { Power } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.composition.CompositeOperation`\ 
   :param base: 
   :type base: :py:class:`@scope/jsii-calc-lib.Value`\ 
   :param pow: 
   :type pow: :py:class:`@scope/jsii-calc-lib.Value`\ 

   .. py:attribute:: base

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:attribute:: expression

      *Implements* :py:meth:`jsii-calc.composition.CompositeOperation.expression`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:attribute:: pow

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: toString() -> string

      *Inherited from* :py:meth:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.toString>`

      :rtype: string


   .. py:attribute:: value

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.value>`

      :type: number *(readonly)*


   .. py:attribute:: decorationPostfixes

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.decorationPostfixes>`

      :type: string[]


   .. py:attribute:: decorationPrefixes

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.decorationPrefixes>`

      :type: string[]


   .. py:attribute:: stringStyle

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.stringStyle>`

      :type: :py:class:`~jsii-calc.composition.CompositeOperation.CompositionStringStyle`\ 


PublicClass
^^^^^^^^^^^

.. py:class:: PublicClass()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.PublicClass;

      .. code-tab:: javascript

         const { PublicClass } = require('jsii-calc');

      .. code-tab:: typescript

         import { PublicClass } from 'jsii-calc';




   .. py:method:: hello()



PythonReservedWords
^^^^^^^^^^^^^^^^^^^

.. py:class:: PythonReservedWords()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.PythonReservedWords;

      .. code-tab:: javascript

         const { PythonReservedWords } = require('jsii-calc');

      .. code-tab:: typescript

         import { PythonReservedWords } from 'jsii-calc';




   .. py:method:: and()



   .. py:method:: as()



   .. py:method:: assert()



   .. py:method:: async()



   .. py:method:: await()



   .. py:method:: break()



   .. py:method:: class()



   .. py:method:: continue()



   .. py:method:: def()



   .. py:method:: del()



   .. py:method:: elif()



   .. py:method:: else()



   .. py:method:: except()



   .. py:method:: finally()



   .. py:method:: for()



   .. py:method:: from()



   .. py:method:: global()



   .. py:method:: if()



   .. py:method:: import()



   .. py:method:: in()



   .. py:method:: is()



   .. py:method:: lambda()



   .. py:method:: nonlocal()



   .. py:method:: not()



   .. py:method:: or()



   .. py:method:: pass()



   .. py:method:: raise()



   .. py:method:: return()



   .. py:method:: try()



   .. py:method:: while()



   .. py:method:: with()



   .. py:method:: yield()



ReferenceEnumFromScopedPackage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ReferenceEnumFromScopedPackage()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ReferenceEnumFromScopedPackage;

      .. code-tab:: javascript

         const { ReferenceEnumFromScopedPackage } = require('jsii-calc');

      .. code-tab:: typescript

         import { ReferenceEnumFromScopedPackage } from 'jsii-calc';




   .. py:method:: loadFoo() -> @scope/jsii-calc-lib.EnumFromScopedModule

      :rtype: :py:class:`@scope/jsii-calc-lib.EnumFromScopedModule`\  *(optional)*


   .. py:method:: saveFoo(value)

      :param value: 
      :type value: :py:class:`@scope/jsii-calc-lib.EnumFromScopedModule`\ 


   .. py:attribute:: foo

      :type: :py:class:`@scope/jsii-calc-lib.EnumFromScopedModule`\  *(optional)*


ReturnsPrivateImplementationOfInterface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: ReturnsPrivateImplementationOfInterface()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.ReturnsPrivateImplementationOfInterface;

      .. code-tab:: javascript

         const { ReturnsPrivateImplementationOfInterface } = require('jsii-calc');

      .. code-tab:: typescript

         import { ReturnsPrivateImplementationOfInterface } from 'jsii-calc';




   .. py:attribute:: privateImplementation

      :type: :py:class:`~jsii-calc.IPrivatelyImplemented`\  *(readonly)*


RuntimeTypeChecking
^^^^^^^^^^^^^^^^^^^

.. py:class:: RuntimeTypeChecking()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.RuntimeTypeChecking;

      .. code-tab:: javascript

         const { RuntimeTypeChecking } = require('jsii-calc');

      .. code-tab:: typescript

         import { RuntimeTypeChecking } from 'jsii-calc';




   .. py:method:: methodWithDefaultedArguments([arg1, [arg2, [arg3]]])

      :param arg1: 
      :type arg1: number *(optional)*
      :param arg2: 
      :type arg2: string *(optional)*
      :param arg3: 
      :type arg3: date *(optional)*


   .. py:method:: methodWithOptionalAnyArgument([arg])

      :param arg: 
      :type arg: any *(optional)*


   .. py:method:: methodWithOptionalArguments(arg1, arg2, [arg3])

      :param arg1: 
      :type arg1: number
      :param arg2: 
      :type arg2: string
      :param arg3: 
      :type arg3: date *(optional)*


Statics
^^^^^^^

.. py:class:: Statics(value)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Statics;

      .. code-tab:: javascript

         const { Statics } = require('jsii-calc');

      .. code-tab:: typescript

         import { Statics } from 'jsii-calc';



   :param value: 
   :type value: string

   .. py:staticmethod:: staticMethod(name) -> string

      :param name: 
      :type name: string
      :rtype: string


   .. py:method:: justMethod() -> string

      :rtype: string


   .. py:attribute:: BAR

      :type: number *(readonly)* *(static)*


   .. py:attribute:: ConstObj

      :type: :py:class:`~jsii-calc.DoubleTrouble`\  *(readonly)* *(static)*


   .. py:attribute:: Foo

      :type: string *(readonly)* *(static)*


   .. py:attribute:: zooBar

      :type: string => string *(readonly)* *(static)*


   .. py:attribute:: instance

      :type: :py:class:`~jsii-calc.Statics`\  *(static)*


   .. py:attribute:: nonConstStatic

      :type: number *(static)*


   .. py:attribute:: value

      :type: string *(readonly)*


StringEnum (enum)
^^^^^^^^^^^^^^^^^

.. py:class:: StringEnum

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.StringEnum;

      .. code-tab:: javascript

         const { StringEnum } = require('jsii-calc');

      .. code-tab:: typescript

         import { StringEnum } from 'jsii-calc';



   .. py:data:: A

   .. py:data:: B

   .. py:data:: C


StripInternal
^^^^^^^^^^^^^

.. py:class:: StripInternal()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.StripInternal;

      .. code-tab:: javascript

         const { StripInternal } = require('jsii-calc');

      .. code-tab:: typescript

         import { StripInternal } from 'jsii-calc';




   .. py:attribute:: youSeeMe

      :type: string


Sum
^^^

.. py:class:: Sum()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Sum;

      .. code-tab:: javascript

         const { Sum } = require('jsii-calc');

      .. code-tab:: typescript

         import { Sum } from 'jsii-calc';



   :extends: :py:class:`~jsii-calc.composition.CompositeOperation`\ 

   .. py:attribute:: expression

      *Implements* :py:meth:`jsii-calc.composition.CompositeOperation.expression`

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:attribute:: parts

      :type: :py:class:`@scope/jsii-calc-lib.Value`\ []


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: toString() -> string

      *Inherited from* :py:meth:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.toString>`

      :rtype: string


   .. py:attribute:: value

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.value>`

      :type: number *(readonly)*


   .. py:attribute:: decorationPostfixes

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.decorationPostfixes>`

      :type: string[]


   .. py:attribute:: decorationPrefixes

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.decorationPrefixes>`

      :type: string[]


   .. py:attribute:: stringStyle

      *Inherited from* :py:attr:`jsii-calc.composition.CompositeOperation <jsii-calc.composition.CompositeOperation.stringStyle>`

      :type: :py:class:`~jsii-calc.composition.CompositeOperation.CompositionStringStyle`\ 


SyncVirtualMethods
^^^^^^^^^^^^^^^^^^

.. py:class:: SyncVirtualMethods()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.SyncVirtualMethods;

      .. code-tab:: javascript

         const { SyncVirtualMethods } = require('jsii-calc');

      .. code-tab:: typescript

         import { SyncVirtualMethods } from 'jsii-calc';




   .. py:method:: callerIsAsync() -> number

      :rtype: number


   .. py:method:: callerIsMethod() -> number

      :rtype: number


   .. py:method:: modifyOtherProperty(value)

      :param value: 
      :type value: string


   .. py:method:: modifyValueOfTheProperty(value)

      :param value: 
      :type value: string


   .. py:method:: readA() -> number

      :rtype: number


   .. py:method:: retrieveOtherProperty() -> string

      :rtype: string


   .. py:method:: retrieveReadOnlyProperty() -> string

      :rtype: string


   .. py:method:: retrieveValueOfTheProperty() -> string

      :rtype: string


   .. py:method:: virtualMethod(n) -> number

      :param n: 
      :type n: number
      :rtype: number


   .. py:method:: writeA(value)

      :param value: 
      :type value: number


   .. py:attribute:: readonlyProperty

      :type: string *(readonly)*


   .. py:attribute:: a

      :type: number


   .. py:attribute:: callerIsProperty

      :type: number


   .. py:attribute:: otherProperty

      :type: string


   .. py:attribute:: theProperty

      :type: string


   .. py:attribute:: valueOfOtherProperty

      :type: string


Thrower
^^^^^^^

.. py:class:: Thrower()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.Thrower;

      .. code-tab:: javascript

         const { Thrower } = require('jsii-calc');

      .. code-tab:: typescript

         import { Thrower } from 'jsii-calc';




   .. py:method:: throwError()



UnaryOperation
^^^^^^^^^^^^^^

.. py:class:: UnaryOperation(operand)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.UnaryOperation;

      .. code-tab:: javascript

         const { UnaryOperation } = require('jsii-calc');

      .. code-tab:: typescript

         import { UnaryOperation } from 'jsii-calc';



   :extends: :py:class:`@scope/jsii-calc-lib.Operation`\ 
   :abstract: Yes
   :param operand: 
   :type operand: :py:class:`@scope/jsii-calc-lib.Value`\ 

   .. py:attribute:: operand

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: toString() -> string

      *Inherited from* :py:meth:`@scope/jsii-calc-lib.Operation <@scope/jsii-calc-lib.Operation.toString>`

      :rtype: string
      :abstract: Yes


   .. py:attribute:: value

      *Inherited from* :py:attr:`@scope/jsii-calc-lib.Value <@scope/jsii-calc-lib.Value.value>`

      :type: number *(readonly)* *(abstract)*


UnionProperties (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: UnionProperties

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.UnionProperties;

      .. code-tab:: javascript

         // UnionProperties is an interface

      .. code-tab:: typescript

         import { UnionProperties } from 'jsii-calc';





   .. py:attribute:: bar

      :type: string or number or :py:class:`~jsii-calc.AllTypes`\  *(readonly)*


   .. py:attribute:: foo

      :type: string or number *(optional)* *(readonly)*


UseBundledDependency
^^^^^^^^^^^^^^^^^^^^

.. py:class:: UseBundledDependency()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.UseBundledDependency;

      .. code-tab:: javascript

         const { UseBundledDependency } = require('jsii-calc');

      .. code-tab:: typescript

         import { UseBundledDependency } from 'jsii-calc';




   .. py:method:: value() -> any

      :rtype: any


UseCalcBase
^^^^^^^^^^^

.. py:class:: UseCalcBase()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.UseCalcBase;

      .. code-tab:: javascript

         const { UseCalcBase } = require('jsii-calc');

      .. code-tab:: typescript

         import { UseCalcBase } from 'jsii-calc';




   .. py:method:: hello() -> @scope/jsii-calc-base.Base

      :rtype: :py:class:`@scope/jsii-calc-base.Base`\ 


UsesInterfaceWithProperties
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: UsesInterfaceWithProperties(obj)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.UsesInterfaceWithProperties;

      .. code-tab:: javascript

         const { UsesInterfaceWithProperties } = require('jsii-calc');

      .. code-tab:: typescript

         import { UsesInterfaceWithProperties } from 'jsii-calc';



   :param obj: 
   :type obj: :py:class:`~jsii-calc.IInterfaceWithProperties`\ 

   .. py:method:: justRead() -> string

      :rtype: string


   .. py:method:: readStringAndNumber(ext) -> string

      :param ext: 
      :type ext: :py:class:`~jsii-calc.IInterfaceWithPropertiesExtension`\ 
      :rtype: string


   .. py:method:: writeAndRead(value) -> string

      :param value: 
      :type value: string
      :rtype: string


   .. py:attribute:: obj

      :type: :py:class:`~jsii-calc.IInterfaceWithProperties`\  *(readonly)*


VariadicMethod
^^^^^^^^^^^^^^

.. py:class:: VariadicMethod(*prefix)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.VariadicMethod;

      .. code-tab:: javascript

         const { VariadicMethod } = require('jsii-calc');

      .. code-tab:: typescript

         import { VariadicMethod } from 'jsii-calc';



   :param \*prefix: 
   :type \*prefix: number

   .. py:method:: asArray(first, *others) -> number[]

      :param first: 
      :type first: number
      :param \*others: 
      :type \*others: number
      :rtype: number[]


VirtualMethodPlayground
^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: VirtualMethodPlayground()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.VirtualMethodPlayground;

      .. code-tab:: javascript

         const { VirtualMethodPlayground } = require('jsii-calc');

      .. code-tab:: typescript

         import { VirtualMethodPlayground } from 'jsii-calc';




   .. py:method:: overrideMeAsync(index) -> number

      :param index: 
      :type index: number
      :rtype: number


   .. py:method:: overrideMeSync(index) -> number

      :param index: 
      :type index: number
      :rtype: number


   .. py:method:: parallelSumAsync(count) -> number

      :param count: 
      :type count: number
      :rtype: number


   .. py:method:: serialSumAsync(count) -> number

      :param count: 
      :type count: number
      :rtype: number


   .. py:method:: sumSync(count) -> number

      :param count: 
      :type count: number
      :rtype: number



composition
^^^^^^^^^^^
.. py:module:: jsii-calc.composition

CompositeOperation
~~~~~~~~~~~~~~~~~~

.. py:class:: CompositeOperation()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.composition.CompositeOperation;

      .. code-tab:: javascript

         const { composition.CompositeOperation } = require('jsii-calc');

      .. code-tab:: typescript

         import { composition.CompositeOperation } from 'jsii-calc';



   :extends: :py:class:`@scope/jsii-calc-lib.Operation`\ 
   :abstract: Yes

   .. py:method:: toString() -> string

      *Implements* :py:meth:`@scope/jsii-calc-lib.Operation.toString`

      :rtype: string


   .. py:attribute:: expression

      :type: :py:class:`@scope/jsii-calc-lib.Value`\  *(readonly)* *(abstract)*


   .. py:attribute:: value

      *Implements* :py:meth:`@scope/jsii-calc-lib.Value.value`

      :type: number *(readonly)*


   .. py:attribute:: decorationPostfixes

      :type: string[]


   .. py:attribute:: decorationPrefixes

      :type: string[]


   .. py:attribute:: stringStyle

      :type: :py:class:`~jsii-calc.composition.CompositeOperation.CompositionStringStyle`\ 

   .. py:class:: CompositionStringStyle

      **Language-specific names:**

      .. tabs::

         .. code-tab:: c#

            using Amazon.JSII.Tests.CalculatorNamespace;

         .. code-tab:: java

            import software.amazon.jsii.tests.calculator.composition.CompositeOperation.CompositionStringStyle;

         .. code-tab:: javascript

            const { composition.CompositeOperation.CompositionStringStyle } = require('jsii-calc');

         .. code-tab:: typescript

            import { composition.CompositeOperation.CompositionStringStyle } from 'jsii-calc';



      .. py:data:: Normal

      .. py:data:: Decorated



   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any



.. py:currentmodule:: jsii-calc

