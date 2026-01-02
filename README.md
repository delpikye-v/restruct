# 🏗️ @delpi/restruct

[![NPM](https://img.shields.io/npm/v/@delpi/restruct.svg)](https://www.npmjs.com/package/@delpi/restruct)
![Downloads](https://img.shields.io/npm/dt/@delpi/restruct.svg)

[Live Demo](https://codesandbox.io/p/sandbox/xs7m9p)

---

## 🌟 Description

`@delpi/restruct` is a frontend runtime framework combining:

* React-style composable UI
* Module – Controller – Service – DI – Lifecycle
* Runtime orchestration for:

  * Intents (events / actions)
  * Effects (side-effects)
  * Reactive Stores
  * Dependency Injection
  * Plugins

> Think of it as a “Frontend behavior runtime, modular & testable.”

---

## ✨ When to Use

* Business logic should not live inside UI components
* UI only emits intents, does not orchestrate logic
* Complex async flows or multiple side effects
* Headless, testable without rendering React
* Multi-module or multi-engine architecture
* Following DDD, hexagonal, or layered frontend architecture

---

## 📦 Installation

```bash
npm install @delpi/restruct
```

---

## 🚀 Basic Usage (Headless)

### 1️⃣ Basic Example

```ts
// counter.store.ts
import { Store } from "@delpi/restruct"
export const counterStore = new Store({ value: 0 })

// counter.module.ts
export const CounterModule = {
  setup(app: any) {
    app.intent.on("counter/inc", () => {
      counterStore.set({ value: counterStore.get().value + 1 })
    })
  }
}

// app.ts
import { AppRuntime } from "@delpi/restruct"
import { CounterModule } from "./counter.module"

const app = new AppRuntime()

// Setup module
CounterModule.setup(app)

// Dispatch an intent
app.intent.dispatch({ type: "counter/inc" })
console.log("Counter value:", counterStore.get().value) // 1
```

> ✅ Quick start, headless, fully testable, no React required.

---

## 🧩 React Integration Example

```ts
// counter.store.ts
import { Store } from "@delpi/restruct"
export const counterStore = new Store({ value: 0 })

// counter.service.ts
import { counterStore } from "./counter.store"

export class CounterService {
  constructor(private store = counterStore) {}
  increment() {
    this.store.set({ value: this.store.get().value + 1 })
  }
}

// counter.module.ts
import { CounterService } from "./counter.service"

export const CounterModule = {
  name: "counter",
  setup(app: any) {
    const service = app.container.resolve(CounterService)
    app.intent.on("counter/inc", () => service.increment())
  }
}

// app.ts
import { AppRuntime } from "@delpi/restruct"
import { CounterModule } from "./counter.module"
import { CounterService } from "./counter.service"

export const app = new AppRuntime()
app.container.resolve(CounterService) // Ensure service instance exists
CounterModule.setup(app)

// CounterView.tsx
import React from "react"
import { useStore, useIntent } from "@delpi/restruct"
import { counterStore } from "./counter.store"

export function CounterView() {
  const state = useStore(counterStore)
  const dispatch = useIntent("counter") // namespaced

  return (
    <button onClick={() => dispatch("inc")}>
      Count: {state.value}
    </button>
  )
}

// main.tsx
import React from "react"
import { createRoot } from "react-dom/client"
import { RuntimeProvider } from "@delpi/restruct"
import { app } from "./app"
import { CounterView } from "./CounterView"

createRoot(document.getElementById("root")!).render(
  <RuntimeProvider runtime={app}>
    <CounterView />
  </RuntimeProvider>
)
```

> ✅ Full React integration, composable UI, runtime orchestration with intents and reactive store.

---

## 🧪 Testing Example

```ts
import { AppRuntime, Store } from "@delpi/restruct"

test("counter increments", () => {
  const app = new AppRuntime()
  const store = new Store({ value: 0 })

  app.intent.on("inc", () => store.set({ value: store.get().value + 1 }))

  app.intent.dispatch({ type: "inc" })
  app.intent.dispatch({ type: "inc" })

  expect(store.get().value).toBe(2)
})
```

---

## ⚙️ Key Features

| Feature / Capability        | @delpi/restruct             | Next.js | Remix  | Gatsby |
| --------------------------- | --------------------------  | ------- | ------ | ------ |
| React-oriented              | ✅ Full React               | ✅       | ✅     | ✅      |
| Intent / Action-based       | ✅ Scoped intents           | ❌       | ❌     | ❌      |
| Async flows built-in        | ✅ Built-in + effects       | ⚠️       | ⚠️     | ⚠️      |
| Side effects management     | ✅ First-class              | ⚠️       | ⚠️     | ⚠️      |
| Reactive Store              | ✅ Store + computed         | ❌       | ❌     | ❌      |
| Module System / DI          | ✅ Modules + lifecycle + DI | ❌       | ❌     | ❌      |
| Computed / Derived state    | ✅ Sync + Async             | ❌       | ❌     | ❌      |
| Scoped / Namespaced Intents | ✅ Yes                      | ❌       | ❌     | ❌      |
| Headless / Testable         | ✅ Fully headless           | ⚠️       | ⚠️     | ⚠️      |

---

## 📜 License

MIT
