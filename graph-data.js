/**
 * ML Knowledge Graph — Data Configuration
 * =========================================
 * This is the ONLY file you need to edit to expand your knowledge graph.
 *
 * HOW TO ADD A NODE:
 * 1. Add an entry to the `nodes` array
 * 2. Add edges in the `edges` array to connect it
 * 3. Push to GitHub — done!
 *
 * NODE FIELDS:
 *   id        : unique string identifier (used in edges)
 *   label     : short display name on the graph
 *   domain    : color group — see DOMAINS below
 *   level     : "beginner" | "intermediate" | "advanced"
 *   summary   : 1-2 sentence description shown in panel header
 *   resources : array of learning resources (see format below)
 *
 * DOMAINS (controls node color):
 *   "foundations"   — Math, Stats, Python basics
 *   "ml-core"       — Classical ML algorithms
 *   "deep-learning" — Neural nets, CNNs, RNNs etc.
 *   "nlp"           — Text, transformers, LLMs
 *   "mlops"         — Deployment, Docker, APIs
 *   "tools"         — Libraries, platforms, frameworks
 *   "projects"      — Hands-on projects
 *
 * RESOURCE TYPES:
 *   { type: "video",    label: "...", url: "YouTube embed URL or channel link",
 *     thumbnail: "optional image url", duration: "5:30" }
 *   { type: "notebook", label: "...", url: "GitHub/Colab link" }
 *   { type: "blog",     label: "...", url: "..." }
 *   { type: "notes",    label: "...", content: "Inline markdown text" }
 *   { type: "course",   label: "...", url: "..." }
 */

const GRAPH_DATA = {

  meta: {
    title: "ML & AI Knowledge Graph",
    subtitle: "by Sajil C. K. — Machine Learning Malayalam",
    channelUrl: "https://www.youtube.com/@sajil36",
    githubUrl: "https://github.com/cksajil",
    websiteUrl: "https://intuitivetutorial.com",
  },

  // ─── NODES ───────────────────────────────────────────────────────────────────
  nodes: [

    // ── FOUNDATIONS ──
    {
      id: "python-basics",
      label: "Python Basics",
      domain: "foundations",
      level: "beginner",
      summary: "Variables, loops, functions, and data structures — the building blocks for all ML code.",
      resources: [
        { type: "video", label: "Python for ML — Full Intro (Malayalam)", url: "https://www.youtube.com/embed/videoseries?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4", duration: "~45 min" },
        { type: "notebook", label: "Python Basics Notebook", url: "https://github.com/cksajil" },
        { type: "blog", label: "Python Cheatsheet", url: "https://www.pythoncheatsheet.org/" }
      ]
    },
    {
      id: "numpy",
      label: "NumPy",
      domain: "foundations",
      level: "beginner",
      summary: "Numerical computing with arrays — the backbone of every ML library in Python.",
      resources: [
        { type: "video", label: "NumPy Crash Course (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "15 min" },
        { type: "notebook", label: "NumPy Practice Notebook", url: "https://github.com/cksajil" },
        { type: "blog", label: "NumPy Official Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" }
      ]
    },
    {
      id: "pandas",
      label: "Pandas",
      domain: "foundations",
      level: "beginner",
      summary: "DataFrame-based data manipulation — read, clean, explore, and transform datasets.",
      resources: [
        { type: "video", label: "Pandas for Data Science (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "20 min" },
        { type: "notebook", label: "Pandas EDA Notebook", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "matplotlib",
      label: "Matplotlib & Seaborn",
      domain: "foundations",
      level: "beginner",
      summary: "Visualize data distributions, correlations, and model outputs with Python's core plotting libraries.",
      resources: [
        { type: "blog", label: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html" }
      ]
    },
    {
      id: "linear-algebra",
      label: "Linear Algebra",
      domain: "foundations",
      level: "beginner",
      summary: "Vectors, matrices, and transformations — the language that neural networks are written in.",
      resources: [
        { type: "course", label: "3Blue1Brown: Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
        { type: "notes", content: "Key concepts: dot product, matrix multiplication, eigenvalues/eigenvectors, SVD. Focus on geometric intuition before computation." }
      ]
    },
    {
      id: "statistics",
      label: "Statistics & Probability",
      domain: "foundations",
      level: "beginner",
      summary: "Mean, variance, distributions, hypothesis testing — understanding data and uncertainty.",
      resources: [
        { type: "blog", label: "StatQuest YouTube Channel", url: "https://www.youtube.com/@statquest" },
        { type: "notes", content: "Core topics: probability distributions (normal, binomial, Poisson), Bayes' theorem, p-values, confidence intervals, central limit theorem." }
      ]
    },
    {
      id: "sql",
      label: "SQL for Data Science",
      domain: "foundations",
      level: "beginner",
      summary: "Query, filter, aggregate, and join structured data — a must-have skill for every data role.",
      resources: [
        { type: "video", label: "SQL Part 1 — SELECT, WHERE, GROUP BY (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "15 min" },
        { type: "video", label: "SQL Part 2 — JOINs (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "15 min" },
        { type: "blog", label: "SQLZoo Interactive Practice", url: "https://sqlzoo.net/" }
      ]
    },

    // ── ML CORE ──
    {
      id: "ml-intro",
      label: "What is ML?",
      domain: "ml-core",
      level: "beginner",
      summary: "Supervised, unsupervised, and reinforcement learning — the three paradigms and when to use each.",
      resources: [
        { type: "video", label: "ML Introduction (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "10 min" },
        { type: "blog", label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" }
      ]
    },
    {
      id: "linear-regression",
      label: "Linear Regression",
      domain: "ml-core",
      level: "beginner",
      summary: "Predict continuous values by fitting a line — the simplest and most interpretable ML model.",
      resources: [
        { type: "video", label: "Linear Regression from Scratch (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "12 min" },
        { type: "notebook", label: "Linear Regression Notebook", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "logistic-regression",
      label: "Logistic Regression",
      domain: "ml-core",
      level: "beginner",
      summary: "Binary classification using a sigmoid function — the go-to baseline for classification tasks.",
      resources: [
        { type: "notebook", label: "Logistic Regression on Titanic", url: "https://github.com/cksajil" },
        { type: "blog", label: "StatQuest: Logistic Regression", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" }
      ]
    },
    {
      id: "decision-trees",
      label: "Decision Trees",
      domain: "ml-core",
      level: "beginner",
      summary: "Tree-structured rules that split data by feature thresholds — interpretable and powerful.",
      resources: [
        { type: "blog", label: "StatQuest: Decision Trees", url: "https://www.youtube.com/watch?v=_L39rN6gz7Y" }
      ]
    },
    {
      id: "random-forest",
      label: "Random Forest",
      domain: "ml-core",
      level: "intermediate",
      summary: "An ensemble of decision trees with random feature sampling — reduces overfitting dramatically.",
      resources: [
        { type: "video", label: "Kaggle Part 2 — Titanic & Random Forest (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "20 min" },
        { type: "notebook", label: "Random Forest on Titanic Kaggle", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "gradient-boosting",
      label: "Gradient Boosting / XGBoost",
      domain: "ml-core",
      level: "intermediate",
      summary: "Sequential ensemble where each tree corrects previous errors — dominates tabular data competitions.",
      resources: [
        { type: "blog", label: "XGBoost Documentation", url: "https://xgboost.readthedocs.io/" },
        { type: "blog", label: "StatQuest: XGBoost", url: "https://www.youtube.com/watch?v=OtD8wVaFm6E" }
      ]
    },
    {
      id: "clustering",
      label: "Clustering (K-Means)",
      domain: "ml-core",
      level: "intermediate",
      summary: "Unsupervised grouping of similar data points — useful for segmentation and pattern discovery.",
      resources: [
        { type: "notebook", label: "K-Means Clustering Notebook", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "model-evaluation",
      label: "Model Evaluation",
      domain: "ml-core",
      level: "beginner",
      summary: "Accuracy, precision, recall, F1, ROC-AUC — choosing the right metric for your problem.",
      resources: [
        { type: "blog", label: "Scikit-learn Metrics Guide", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
        { type: "notes", content: "Remember: accuracy is misleading on imbalanced datasets. Always check confusion matrix and ROC curve alongside accuracy." }
      ]
    },
    {
      id: "kaggle",
      label: "Kaggle Competitions",
      domain: "tools",
      level: "beginner",
      summary: "Real datasets, real leaderboards — the fastest way to practice ML end-to-end.",
      resources: [
        { type: "video", label: "Kaggle Getting Started (Malayalam)", url: "https://www.youtube.com/@sajil36", duration: "15 min" },
        { type: "blog", label: "Kaggle Learn Courses", url: "https://www.kaggle.com/learn" }
      ]
    },

    // ── DEEP LEARNING ──
    {
      id: "neural-networks",
      label: "Neural Networks",
      domain: "deep-learning",
      level: "intermediate",
      summary: "Layers of weighted connections trained with backpropagation — the foundation of deep learning.",
      resources: [
        { type: "blog", label: "3Blue1Brown: Neural Networks", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
        { type: "notebook", label: "Neural Network from Scratch (PyTorch)", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "pytorch",
      label: "PyTorch",
      domain: "deep-learning",
      level: "intermediate",
      summary: "The leading research deep learning framework — tensors, autograd, and model training loops.",
      resources: [
        { type: "blog", label: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/" },
        { type: "notebook", label: "PyTorch Basics Notebook", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "cnn",
      label: "CNNs",
      domain: "deep-learning",
      level: "intermediate",
      summary: "Convolutional Neural Networks — extract spatial features from images for classification and detection.",
      resources: [
        { type: "notebook", label: "CNN Image Classifier Notebook", url: "https://github.com/cksajil" },
        { type: "blog", label: "CS231n: CNNs for Visual Recognition", url: "http://cs231n.stanford.edu/" }
      ]
    },
    {
      id: "transfer-learning",
      label: "Transfer Learning",
      domain: "deep-learning",
      level: "intermediate",
      summary: "Fine-tune pretrained models (ResNet, EfficientNet) on your own data — massive shortcut for vision tasks.",
      resources: [
        { type: "notebook", label: "Transfer Learning with EfficientNet", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "edge-ml",
      label: "Edge ML",
      domain: "deep-learning",
      level: "advanced",
      summary: "Run models on microcontrollers and mobile devices — quantization, pruning, and TFLite.",
      resources: [
        { type: "blog", label: "TensorFlow Lite Guide", url: "https://www.tensorflow.org/lite/guide" }
      ]
    },

    // ── NLP & LLMs ──
    {
      id: "text-processing",
      label: "Text Preprocessing",
      domain: "nlp",
      level: "beginner",
      summary: "Tokenization, stemming, stop words, TF-IDF — turning raw text into features for ML models.",
      resources: [
        { type: "notebook", label: "NLP Preprocessing Notebook", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "transformers",
      label: "Transformers",
      domain: "nlp",
      level: "intermediate",
      summary: "Attention-based architecture behind BERT, GPT, and all modern LLMs.",
      resources: [
        { type: "blog", label: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
        { type: "blog", label: "Andrej Karpathy: Let's build GPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" }
      ]
    },
    {
      id: "huggingface",
      label: "HuggingFace",
      domain: "nlp",
      level: "intermediate",
      summary: "The central hub for pretrained models, datasets, and Spaces — your primary deployment platform.",
      resources: [
        { type: "blog", label: "HuggingFace Course", url: "https://huggingface.co/learn/nlp-course" },
        { type: "blog", label: "HuggingFace Spaces Docs", url: "https://huggingface.co/docs/hub/spaces" }
      ]
    },
    {
      id: "llm-apis",
      label: "LLM APIs",
      domain: "nlp",
      level: "intermediate",
      summary: "Using Claude, GPT-4, and Gemini APIs to build AI-powered applications without training a model.",
      resources: [
        { type: "blog", label: "Anthropic Claude API Docs", url: "https://docs.anthropic.com/" },
        { type: "blog", label: "OpenAI Quickstart", url: "https://platform.openai.com/docs/quickstart" }
      ]
    },
    {
      id: "rag",
      label: "RAG Pipelines",
      domain: "nlp",
      level: "advanced",
      summary: "Retrieval-Augmented Generation — ground LLM responses in your own documents using vector search.",
      resources: [
        { type: "blog", label: "LangChain RAG Docs", url: "https://python.langchain.com/docs/use_cases/question_answering/" },
        { type: "notebook", label: "RAG with ChromaDB Notebook", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "ai-agents",
      label: "AI Agents",
      domain: "nlp",
      level: "advanced",
      summary: "LLMs that use tools, plan multi-step tasks, and call external APIs — the frontier of applied AI.",
      resources: [
        { type: "blog", label: "LangGraph Agents Docs", url: "https://langchain-ai.github.io/langgraph/" },
        { type: "blog", label: "ReAct Paper", url: "https://arxiv.org/abs/2210.03629" }
      ]
    },
    {
      id: "fine-tuning",
      label: "Fine-Tuning LLMs",
      domain: "nlp",
      level: "advanced",
      summary: "LoRA, QLoRA, and RLHF — adapting pretrained models to specialized domains with minimal compute.",
      resources: [
        { type: "blog", label: "HuggingFace PEFT Library", url: "https://huggingface.co/docs/peft" },
        { type: "blog", label: "Axolotl Fine-tuning Guide", url: "https://github.com/axolotl-ai-cloud/axolotl" }
      ]
    },
    {
      id: "asr",
      label: "Speech Recognition (ASR)",
      domain: "nlp",
      level: "advanced",
      summary: "Whisper fine-tuning for Manglish/Malayalam — converting speech to text with custom datasets.",
      resources: [
        { type: "blog", label: "Whisper Fine-tuning on HuggingFace", url: "https://huggingface.co/blog/fine-tune-whisper" },
        { type: "blog", label: "IndicVoices-R Dataset", url: "https://huggingface.co/datasets/ai4bharat/IndicVoices-R" }
      ]
    },

    // ── MLOPS ──
    {
      id: "fastapi",
      label: "FastAPI",
      domain: "mlops",
      level: "intermediate",
      summary: "Build REST APIs for your ML models — request validation, async endpoints, and auto-generated docs.",
      resources: [
        { type: "blog", label: "FastAPI Official Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
        { type: "notebook", label: "ML Model as FastAPI Endpoint", url: "https://github.com/cksajil" }
      ]
    },
    {
      id: "docker",
      label: "Docker",
      domain: "mlops",
      level: "intermediate",
      summary: "Containerize your ML apps so they run identically everywhere — dev, staging, and production.",
      resources: [
        { type: "blog", label: "Docker for ML Engineers", url: "https://docs.docker.com/get-started/" },
        { type: "blog", label: "HF Spaces Docker SDK Guide", url: "https://huggingface.co/docs/hub/spaces-sdks-docker" }
      ]
    },
    {
      id: "gradio",
      label: "Gradio",
      domain: "mlops",
      level: "intermediate",
      summary: "Build interactive ML demos in Python — deploy on HuggingFace Spaces in minutes.",
      resources: [
        { type: "blog", label: "Gradio Quickstart", url: "https://www.gradio.app/guides/quickstart" }
      ]
    },
    {
      id: "langchain",
      label: "LangChain / LangGraph",
      domain: "mlops",
      level: "advanced",
      summary: "Framework for building LLM pipelines, RAG systems, and multi-agent workflows.",
      resources: [
        { type: "blog", label: "LangChain Python Docs", url: "https://python.langchain.com/docs/get_started/introduction" },
        { type: "blog", label: "LangGraph Documentation", url: "https://langchain-ai.github.io/langgraph/" }
      ]
    },

    // ── PROJECTS ──
    {
      id: "proj-grader",
      label: "AI Assignment Grader",
      domain: "projects",
      level: "advanced",
      summary: "Auto-grade student code submissions using Claude API + Docker + LangSmith tracing.",
      resources: [
        { type: "notebook", label: "AI Grader GitHub Repo", url: "https://github.com/cksajil" },
        { type: "notes", content: "Stack: Claude/GPT-4 API, FastAPI, Docker, LangSmith. Rubric-aware grading with criterion scores, strengths, and fix snippets. Deployed on HuggingFace Spaces." }
      ]
    },
    {
      id: "proj-omnisense",
      label: "OmniSense",
      domain: "projects",
      level: "advanced",
      summary: "Multimodal AI media analyzer — semantic video search using Whisper, CLIP, BLIP-2, FAISS.",
      resources: [
        { type: "blog", label: "OmniSense on HuggingFace Spaces", url: "https://huggingface.co/spaces" },
        { type: "notes", content: "Stack: Whisper (ASR), CLIP (image-text), BLIP-2 (captioning), DETR (detection), FAISS (vector search), Gradio UI." }
      ]
    },
    {
      id: "proj-gpt-story",
      label: "GPT Story Teller",
      domain: "projects",
      level: "advanced",
      summary: "MiniGPT trained from scratch using JAX/Flax NNX — character-level language model deployed on HF Spaces.",
      resources: [
        { type: "notebook", label: "MiniGPT JAX/Flax Notebook", url: "https://github.com/cksajil" },
        { type: "notes", content: "Trained on JAX/Flax NNX from scratch. Great portfolio piece showing foundational LLM understanding." }
      ]
    },

  ],

  // ─── EDGES ───────────────────────────────────────────────────────────────────
  // Format: { source: "node-id", target: "node-id" }
  // Tip: connect prerequisites → dependents
  edges: [
    // Foundations chain
    { source: "python-basics", target: "numpy" },
    { source: "python-basics", target: "pandas" },
    { source: "numpy", target: "pandas" },
    { source: "pandas", target: "matplotlib" },
    { source: "python-basics", target: "sql" },
    { source: "linear-algebra", target: "statistics" },
    { source: "statistics", target: "ml-intro" },

    // Foundations → ML Core
    { source: "numpy", target: "linear-regression" },
    { source: "pandas", target: "kaggle" },
    { source: "ml-intro", target: "linear-regression" },
    { source: "ml-intro", target: "logistic-regression" },
    { source: "ml-intro", target: "clustering" },
    { source: "linear-regression", target: "model-evaluation" },
    { source: "logistic-regression", target: "model-evaluation" },
    { source: "logistic-regression", target: "decision-trees" },
    { source: "decision-trees", target: "random-forest" },
    { source: "random-forest", target: "gradient-boosting" },
    { source: "model-evaluation", target: "kaggle" },
    { source: "random-forest", target: "kaggle" },

    // ML Core → Deep Learning
    { source: "linear-algebra", target: "neural-networks" },
    { source: "ml-intro", target: "neural-networks" },
    { source: "numpy", target: "pytorch" },
    { source: "neural-networks", target: "pytorch" },
    { source: "pytorch", target: "cnn" },
    { source: "cnn", target: "transfer-learning" },
    { source: "transfer-learning", target: "edge-ml" },

    // Deep Learning → NLP
    { source: "pytorch", target: "transformers" },
    { source: "text-processing", target: "transformers" },
    { source: "transformers", target: "huggingface" },
    { source: "huggingface", target: "llm-apis" },
    { source: "huggingface", target: "fine-tuning" },
    { source: "huggingface", target: "asr" },
    { source: "llm-apis", target: "rag" },
    { source: "rag", target: "ai-agents" },

    // MLOps
    { source: "python-basics", target: "fastapi" },
    { source: "fastapi", target: "docker" },
    { source: "python-basics", target: "gradio" },
    { source: "gradio", target: "huggingface" },
    { source: "llm-apis", target: "langchain" },
    { source: "rag", target: "langchain" },
    { source: "langchain", target: "ai-agents" },

    // Projects
    { source: "llm-apis", target: "proj-grader" },
    { source: "docker", target: "proj-grader" },
    { source: "langchain", target: "proj-grader" },
    { source: "asr", target: "proj-omnisense" },
    { source: "cnn", target: "proj-omnisense" },
    { source: "rag", target: "proj-omnisense" },
    { source: "pytorch", target: "proj-gpt-story" },
    { source: "transformers", target: "proj-gpt-story" },
  ]

};
