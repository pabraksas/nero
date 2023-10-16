# LLM и их лицензии

## Список декодерных генеративных моделей, которые вышли в 2022-2023 году. 
*Пригодные для коммерческого использования модели (MIT, Apache 2.0) практически перестали выпускать. Но они все еще есть!*
 
- [mGPT](https://huggingface.co/ai-forever/mGPT) — многоязычная версия GPT-3 на 60 языках.
	- Лицензия: Apache 2.0
- [BLOOM](https://huggingface.co/bigscience/bloom) — самая большая GPT-3-like модель на 176 млрд параметров, 59 языков. Обучена на открытом датасете the Pile.    
	- Лицензия: OpenRAIL-M, т.е. чекпоинты открытые, но есть целый список запрещенных применений
- [GALACTICA](https://huggingface.co/facebook/galactica-120b) — GPT-3-like модель от Meta, обученная на корпусе научных публикаций papers with code. 
	- Лицензия: cc-by-nc-4.0, коммерческое использование закрыто
- [LLaMA](https://huggingface.co/decapoda-research/llama-65b-hf) — открытая модель от Meta, альтернатива chatGPT, распространяется по запросу. 
	- Лицензия: LLaMA license, только для научного использования
- [ALPACA](https://huggingface.co/tloen/alpaca-lora-7b) (LoRa)  — дообученная LLaMA на датасете инструкций Stanford ALPACA, собранных из демо OpenAI. 
	- Лицензия: MIT
- [VICUNA](https://huggingface.co/eachadea/vicuna-13b)  — открытая чат-бот модель на файн-тюне LLaMA. 
	- Лицензия: Apache 2.0 (честно говоря, это вызывает очень большой вопрос, по идее файн-тюны LLaMA нельзя распространять)
- [BlenderBot](https://parl.ai/projects/bb3/#model-weights) — open-domain диалоговая модель на 175 млрд параметров, архитектура Director. 
	- Лицензия: Apache 2.0
- [Baize](https://huggingface.co/project-baize/baize-lora-30B)  — еще одна LoRa-дообученная диалоговая модель на основе LLaMa и ALPACA. 
	- Лицензия: cc-by-nc-4.0, коммерческое использование закрыто
- [OpenAssistant](https://huggingface.co/OpenAssistant/oasst-sft-1-pythia-12b)   — первые чекпоинты опенсорс-аналога chatGPT, готова версия SFT-1 12B модели. Датасет собирали всем сообществом. 
	- Лицензия: Apache 2.0
- [Pythia](https://huggingface.co/EleutherAI/pythia-12b-deduped) — GPT-3-like модель от EleutherAI, обучена на открытом датасете the Pile. 
	- Лицензия: Apache 2.0
- [Cerebras-GPT](https://huggingface.co/cerebras/Cerebras-GPT-13B) — GPT-3-like модель от Cerebras, похожа на Pythia, но основана на решениях из работы Chinchilla (единственная открытая модель с compute-optimal training). 
	- Лицензия: Apache 2.0
