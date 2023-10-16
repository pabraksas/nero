
[twitter.com/LangChainAI](https://twitter.com/LangChainAI?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)

[Подробное руководство по LangChain: создание мощных приложений с большими языковыми моделями](https://coffee-web.ru/blog/a-comprehensive-guide-to-langchain-building-powerful-applications-with-large-language-models/)

# Подробное руководство по LangChain: создание мощных приложений с большими языковыми моделями

8 апреля 2023 г.

Привет! Позвольте представить вам LangChain, замечательную библиотеку, которая позволяет разработчикам создавать мощные приложения с использованием [большие языковые модели](https://www.replicatecodex.com/?tab=modelsTable&tags=%5B%22Text-to-Text%22.%20%5D&ref=notes.replicatecodex.com) (LLM) и другие вычислительные ресурсы. В этом руководстве я дам вам краткое изложение того, как работает LangChain, и рассмотрю некоторые интересные варианты использования, такие как ответы на вопросы, чат-боты и агенты. Я также познакомлю вас с кратким руководством, которое поможет вам приступить к работе. Начнем!

## Что такое LangChain?

[LangChain](https://docs.langchain.com/docs/?ref=notes.replicatecodex.com) – это мощная платформа, помогающая разработчикам создавать комплексные приложения. используя языковые модели. Он предлагает набор инструментов, компонентов и интерфейсов, которые упрощают процесс создания приложений на основе больших языковых моделей (LLM) и моделей чата. LangChain позволяет легко управлять взаимодействием с языковыми моделями, объединять несколько компонентов и интегрировать дополнительные ресурсы, такие как API и базы данных.

LangChain имеет ряд основных концепций. Давайте рассмотрим их один за другим:

### 1. Компоненты и цепочки

В LangChain компоненты представляют собой модульные строительные блоки, которые можно комбинировать для создания мощных приложений. Цепочка — это последовательность компонентов (или других цепочек), объединенных для выполнения определенной задачи. Например, цепочка может включать шаблон подсказки, языковую модель и анализатор выходных данных, которые вместе обрабатывают вводимые пользователем данные, генерируют ответ и обрабатывают выходные данные.

### 2. Шаблоны и значения подсказок

Шаблон подсказки отвечает за создание значения подсказки, которое в конечном итоге передается языковой модели. Шаблоны подсказок помогают преобразовывать пользовательский ввод и другую динамическую информацию в формат, подходящий для языковой модели. PromptValues ​​— это классы с методами, которые можно преобразовать в точные типы ввода, ожидаемые каждым типом модели (например, текст или сообщения чата).

### 3. Примеры селекторов

Селекторы примеров полезны, когда вы хотите динамически включать примеры в приглашение. Они принимают пользовательский ввод и возвращают список примеров для использования в приглашении, что делает его более мощным и зависящим от контекста.

### 4. Парсеры вывода

Парсеры вывода отвечают за структурирование ответов языковой модели в более удобный формат. Они реализуют два основных метода: один для предоставления инструкций по форматированию, а другой для преобразования ответа языковой модели в структурированный формат. Это упрощает работу с выходными данными в приложении.

### 5. Индексы и ретриверы

Индексы – это способ организации документов, упрощающий взаимодействие с ними языковых моделей. Ретриверы — это интерфейсы для извлечения соответствующих документов и их объединения с языковыми моделями. LangChain предоставляет инструменты и функции для работы с различными типами индексов и средств извлечения, такими как векторные базы данных и разделители текста.

### 6. История сообщений чата

LangChain в основном взаимодействует с языковыми моделями через интерфейс чата. Класс ChatMessageHistory отвечает за запоминание всех предыдущих взаимодействий в чате, которые затем можно передать обратно в модель, обобщить или объединить другими способами. Это помогает сохранять контекст и улучшает понимание разговора моделью.

### 7. Агенты и наборы инструментов

Агенты — это объекты, управляющие принятием решений в LangChain. У них есть доступ к набору инструментов, и они могут решить, какой инструмент вызывать, на основе ввода пользователя. Наборы инструментов — это наборы инструментов, которые при совместном использовании могут выполнять определенную задачу. Исполнитель агентов отвечает за запуск агентов с помощью соответствующих инструментов.

Понимая и используя эти основные концепции, вы можете использовать возможности LangChain для создания приложений с расширенной языковой моделью, которые являются адаптируемыми, эффективными и способными обрабатывать сложные варианты использования.

## Что такое агент LangChain?

Агент LangChain — это объект, который управляет принятием решений в рамках. Он имеет доступ к набору инструментов и может решить, какой инструмент вызывать, на основе ввода пользователя. Агенты помогают создавать сложные приложения, требующие адаптивных и зависящих от контекста ответов. Они особенно полезны, когда существует неизвестная цепочка взаимодействий, зависящая от ввода пользователя и других факторов.

## Как можно использовать LangChain?

Чтобы использовать LangChain, разработчик должен начать с импорта необходимых компонентов и инструментов, таких как LLM, модели чата, агенты, цепочки и функции памяти. Эти компоненты объединены для создания приложения, которое может понимать, обрабатывать и реагировать на вводимые пользователем данные.

LangChain предоставляет множество компонентов для конкретных случаев использования, таких как личные помощники, ответы на вопросы по документам, чат-боты, запросы табличных данных, взаимодействие с API, извлечение, оценка и обобщение.

## Что такое модель LangChain?

Модель LangChain — это абстракция, представляющая различные типы моделей, используемых в платформе. В LangChain есть три основных типа моделей:

1. **LLM (модели больших языков)**: эти модели принимают текстовую строку в качестве входных данных и возвращают текстовую строку в качестве выходных данных. Они составляют основу многих приложений языковых моделей.
2. **Модели чата**. Модели чата поддерживаются языковой моделью, но имеют более структурированный API. Они принимают список сообщений чата в качестве входных данных и возвращают сообщение чата. Это упрощает управление историей разговоров и сохранение контекста.
3. **Модели встраивания текста**. Эти модели принимают текст в качестве входных данных и возвращают список значений с плавающей запятой, представляющих встраивание текста. Эти вложения можно использовать для таких задач, как поиск документов, кластеризация и сравнение сходства.

Разработчики могут выбрать подходящую модель LangChain для своего варианта использования и использовать предоставленные компоненты для создания своих приложений.

### Ключевые особенности LangChain

LangChain предназначен для поддержки разработчиков в шести основных областях:

1. **LLM и подсказки**: LangChain упрощает управление подсказками, их оптимизацию и создание универсального интерфейса для всех LLM. Кроме того, он включает несколько удобных утилит для работы с LLM.
2. **Цепочки**. Это последовательности вызовов LLM или других утилит. LangChain предоставляет стандартный интерфейс для цепочек, интегрируется с различными инструментами и предлагает сквозные цепочки для популярных приложений.
3. **Расширенная генерация данных**: LangChain позволяет цепочкам взаимодействовать с внешними источниками данных для сбора данных на этапе генерации. Например, с его помощью можно резюмировать длинные тексты или отвечать на вопросы, используя определенные источники данных.
4. **Агенты**. Агент позволяет LLM принимать решения о действиях, выполнять эти действия, проверять результаты и продолжать работу, пока работа не будет выполнена. LangChain предоставляет стандартный интерфейс для агентов, множество агентов на выбор и примеры сквозных агентов.
5. **Память**: LangChain имеет стандартный интерфейс для памяти, который помогает поддерживать состояние между вызовами цепочки или агента. Он также предлагает ряд реализаций памяти и примеры цепочек или агентов, использующих память.
6. **Оценка**. Оценивать генеративные модели с помощью традиционных показателей сложно. Вот почему LangChain предоставляет подсказки и цепочки, чтобы помочь разработчикам оценить свои модели с помощью LLM самостоятельно.

### Случаи использования

LangChain поддерживает множество вариантов использования, например:

* **Ответы на вопросы по конкретным документам**: отвечайте на вопросы на основе заданных документов, используя информацию в этих документах для создания ответов. * **Чат-боты**: создавайте чат-ботов, которые могут создавать текст, используя возможности LLM. * **Агенты**: создайте агентов, которые могут принимать решения о действиях, выполнять эти действия, наблюдать за результатами и продолжать работу, пока они не будут выполнены.

## Краткое руководство: создание сквозного приложения языковой модели с помощью LangChain

Установка

Для начала установим LangChain. Просто запустите следующую команду:

`pip install langchain`

### Настройка среды

Теперь, поскольку LangChain часто необходимо интегрировать с поставщиками моделей, хранилищами данных, API и т. д., мы настроим нашу среду. В этом примере мы собираемся использовать API OpenAI, поэтому нам нужно установить их SDK:

`pip install openai`

Далее настроим переменную окружения в терминале:

`export OPENAI_API_KEY="..."`

Или, если вы предпочитаете работать внутри блокнота Jupyter или скрипта Python, вы можете установить переменную среды следующим образом:

`import os os.environ["OPENAI_API_KEY"] = "..."`

### Создание приложения языковой модели: LLM

Установив LangChain и настроив среду, мы готовы приступить к созданию нашего приложения языковой модели. LangChain предоставляет набор модулей, которые можно использовать для создания приложений языковой модели. Вы можете комбинировать эти модули для более сложных приложений или использовать их по отдельности для более простых.

### Создание приложения языковой модели: модели чата

В дополнение к LLM вы также можете работать с моделями чата. Это разновидность языковых моделей, которые используют языковые модели под капотом, но имеют другой интерфейс. Вместо API «ввода и вывода текста» модели чата работают с сообщениями чата в качестве входных и выходных данных. API-интерфейсы модели чата довольно новы, поэтому все еще ищут лучшие абстракции.

Чтобы получить завершение чата, вам нужно передать одно или несколько сообщений в модель чата. В настоящее время LangChain поддерживает типы AIMessage, HumanMessage, SystemMessage и ChatMessage. В основном вы будете работать с HumanMessage, AIMessage и SystemMessage.

Вот пример использования моделей чата:

`from langchain.chat_models import ChatOpenAI from langchain.schema import (     AIMessage,     HumanMessage,     SystemMessage )  chat = ChatOpenAI(temperature=0)`

Вы можете получить завершение, передав одно сообщение:

`chat([HumanMessage(content="Translate this sentence from English to French. I love programming.")]) # -> AIMessage(content="J'aime programmer.", additional_kwargs={})`

Или отправьте несколько сообщений для моделей OpenAI gpt-3.5-turbo и gpt-4:

`messages = [     SystemMessage(content="You are a helpful assistant that translates English to French."),     HumanMessage(content="Translate this sentence from English to French. I love programming.") ] chat(messages) # -> AIMessage(content="J'aime programmer.", additional_kwargs={})`

Вы также можете генерировать завершения для нескольких наборов сообщений, используя `generate`. Это возвращает LLMResult с дополнительным параметром сообщения:

`batch_messages = [     [         SystemMessage(content="You are a helpful assistant that translates English to French."),         HumanMessage(content="Translate this sentence from English to French. I love programming.")     ],     [         SystemMessage(content="You are a helpful assistant that translates English to French."),         HumanMessage(content="Translate this sentence from English to French. I love artificial intelligence.")     ], ] result = chat.generate(batch_messages) result # -> LLMResult(generations=[[ChatGeneration(text="J'aime programmer.", generation_info=None, message=AIMessage(content="J'aime programmer.", additional_kwargs={}))], [ChatGeneration(text="J'aime l'intelligence artificielle.", generation_info=None, message=AIMessage(content="J'aime l'intelligence artificielle.", additional_kwargs={}))]], llm_output={'token_usage': {'prompt_tokens': 71, 'completion_tokens': 18, 'total_tokens': 89}})`

И вы можете извлечь информацию, например об использовании токена, из LLMResult:

`result.llm_output['token_usage'] # -> {'prompt_tokens': 71, 'completion_tokens': 18, 'total_tokens': 89}`

С моделями чата вы также можете использовать шаблоны, применяя MessagePromptTemplate. Вы можете создать ChatPromptTemplate из одного или нескольких MessagePromptTemplates. Метод `format_prompt` ChatPromptTemplate возвращает значение PromptValue, которое можно преобразовать в строку или объект сообщения, в зависимости от того, хотите ли вы использовать отформатированное значение в качестве входных данных для LLM или модели чата.

Вот пример:

`from langchain.chat_models import ChatOpenAI from langchain.prompts.chat import (     ChatPromptTemplate,     SystemMessagePromptTemplate,     HumanMessagePromptTemplate, )  chat = ChatOpenAI(temperature=0)  template="You are a helpful assistant that translates {input_language} to {output_language}." system_message_prompt = SystemMessagePromptTemplate.from_template(template) human_template="{text}" human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)  chat_prompt = ChatPromptTemplate.from_messages([system_message_prompt, human_message_prompt])  # get a chat completion from the formatted messages chat(chat_prompt.format_prompt(input_language="English", output_language="French", text="I love programming.").to_messages()) # -> AIMessage(content="J'aime programmer.", additional_kwargs={})`

Вы также можете использовать LLMChain с моделями чата:

`from langchain.chat_models import ChatOpenAI from langchain import LLMChain from langchain.prompts.chat import (     ChatPromptTemplate,     SystemMessagePromptTemplate,     HumanMessagePromptTemplate, )  chat = ChatOpenAI(temperature=0)  template="You are a helpful assistant that translates {input_language} to {output_language}." system_message_prompt = SystemMessagePromptTemplate.from_template(template) human_template="{text}" human_message_prompt = HumanMessagePromptTemplate.from_template(human_template) chat_prompt = ChatPromptTemplate.from_messages([system_message_prompt, human_message_prompt])  chain = LLMChain(llm=chat, prompt=chat_prompt) chain.run(input_language="English", output_language="French", text="I love programming.") # -> "J'aime programmer."`

Вы также можете использовать агентов с моделями чата. Инициализируйте агент, используя `AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION` в качестве типа агента:

``from langchain.agents import load_tools from langchain.agents import initialize_agent from langchain.agents import AgentType from langchain.chat_models import ChatOpenAI from langchain.llms import OpenAI  # First, let's load the language model we're going to use to control the agent. chat = ChatOpenAI(temperature=0)  # Next, let's load some tools to use. Note that the `llm-math` tool uses an LLM, so we need to pass that in. llm = OpenAI(temperature=0) tools = load_tools(["serpapi", "llm-math"], llm=llm)  # Finally, let's initialize an agent with the tools, the language model, and the type of agent we want to use. agent = initialize_agent(tools, chat, agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, verbose=True)  # Now let's test it out! agent.run("Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?")``

В этом примере агент в интерактивном режиме выполнит поиск и вычисления, чтобы предоставить окончательный ответ.

Наконец, давайте рассмотрим использование памяти с цепочками и агентами, инициализированными моделями чата. Основное различие между этим и памятью для LLM заключается в том, что мы можем хранить предыдущие сообщения как их собственные уникальные объекты памяти, а не объединять их в одну строку.

Вот пример использования `ConversationChain`:

`from langchain.prompts import (     ChatPromptTemplate,      MessagesPlaceholder,      SystemMessagePromptTemplate,      HumanMessagePromptTemplate ) from langchain.chains import ConversationChain from langchain.chat_models import ChatOpenAI from langchain.memory import ConversationBufferMemory  prompt = ChatPromptTemplate.from_messages([     SystemMessagePromptTemplate.from_template("The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."),     MessagesPlaceholder(variable_name="history"),     HumanMessagePromptTemplate.from_template("{input}") ])  llm = ChatOpenAI(temperature=0) memory = ConversationBufferMemory(return_messages=True) conversation = ConversationChain(memory=memory, prompt=prompt, llm=llm)  conversation.predict(input="Hi there!") # -> 'Hello! How can I assist you today?'  conversation.predict(input="I'm doing well! Just having a conversation with an AI.") # -> "That sounds like fun! I'm happy to chat with you. Is there anything specific you'd like to talk about?"  conversation.predict(input="Tell me about yourself.") # -> "Sure! I am an AI language model created by OpenAI. I was trained on a large dataset of text from the internet, which allows me to understand and generate human-like language. I can answer questions, provide information, and even have conversations like this one. Is there anything else you'd like to know about me?"`

В этом примере мы использовали `ConversationChain` для сохранения контекста беседы при множественных взаимодействиях с ИИ.

Вот и все! Теперь у вас есть четкое представление о том, как использовать LangChain для создания сквозных приложений языковой модели. Следуя этим примерам, вы сможете разрабатывать мощные приложения языковых моделей с использованием LLM, моделей чата, агентов, цепочек и функций памяти.

## Заключение

В заключение следует отметить, что LangChain — это мощная платформа, упрощающая процесс создания приложений с расширенной языковой моделью за счет модульного и гибкого подхода. Понимая основные концепции, такие как компоненты, цепочки, шаблоны подсказок, анализаторы вывода, индексы, средства извлечения, история сообщений чата и агенты, вы можете создавать собственные решения, адаптированные к вашим конкретным потребностям. Адаптивность и простота использования LangChain делают его бесценным инструментом для разработчиков, позволяя им раскрыть весь потенциал языковых моделей и создавать интеллектуальные контекстно-зависимые приложения для самых разных вариантов использования.

:::информация Также опубликовано [здесь](https://notes.replicatecodex.com/a-complete-guide-to-langchain-building-powerful-applications-with-large-language-models/).< /p>

:::

---

[Оригинал](https://hackernoon.com/a-comprehensive-guide-to-langchain-building-powerful-applications-with-large-language-models)