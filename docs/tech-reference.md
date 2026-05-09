# Системы инертного хранения промышленных товаров

## Техническая справка v1.0

**Заказчик:** Аслан КАА (idriskaaa@gmail.com · aslankaa.com)
**Дата:** 2026-05-08
**Статус:** Внутренний документ. База для презентаций инвесторам, тендерных заявок (Росрезерв, Минобороны, Минздрав), патентных заявок (ЕАЭС/PCT).

---

## TL;DR (для инвестора, 1 страница)

**Что:** герметичные капсулы и многослойные ламинатные пакеты с инертной средой (азот / аргон) и кислород-абсорберами для долговременного (10–50 лет) хранения дорогостоящих промышленных товаров.

**Зачем:** в существующих решениях есть **функциональный разрыв**:
- Музеи (US National Archives, Library of Congress) умеют делать аргоновые капсулы под уникальные артефакты — но штучно, не как продукт.
- Военные (MIL-STD-2073, ГОСТ В 9.014) знают азотный продув — только для агрегатов, не для целых изделий.
- Авто-сегмент (CarCapsule, Carcoon) работает на осушенном воздухе и VCI — без инертного газа.
- MAP-индустрия (Sealed Air, Amcor) — для упаковки еды на 1–2 года, не для долговременного хранения промтоваров.

**Никто не предлагает универсальный продукт «толстостенный ламинатный пакет / жёсткая капсула + инертный газ + кислород-абсорбер + IoT-мониторинг» под промсегмент.**

**Кому продавать:**
1. Коллекционеры авто, оружия, часов, произведений искусства (Ближний Восток, Азия, премиум-РФ).
2. Музеи и архивы (РФ, СНГ — нет своего поставщика, импортируют Goppion/Glasbau Hahn).
3. Государственные стратегические резервы (Росрезерв, Минздрав, Минобороны РФ).
4. Фармацевтика (стратегические запасы вакцин и API).
5. Нефтегаз / атомная отрасль (длительная консервация запасных агрегатов).

**Размер рынка (для оценки):**
- Food packaging: $421B (2025) → $548B (2030) [MarketsAndMarkets].
- Pharma packaging: ~$130B (2025).
- Collector-car preservation: $3–5B при $20B+ collector-car insurance market.
- Long-term industrial preservation: оценок нет (фрагментирован), но MIL-STD-2073 и ГОСТ В 9.014 регулируют миллиарды долларов госзаказа.

**Патентная чистота:** ближайшие патенты — US5659932A (погребальная капсула), US7723701B1 (лабораторные образцы), CN203497420U (вакуумный авточехол без газа). **Ниша «многослойный ламинат + аргон/азот + IoT-мониторинг для целого промышленного изделия» свободна.**

---

## 1. Проблема долговременного хранения промышленных товаров

### 1.1 Механизмы деградации в обычной атмосфере

Атмосферный воздух содержит ~21% O₂ и до 100% относительной влажности. Эти два фактора инициируют:

| Механизм | Поражаемые товары | Скорость |
|---|---|---|
| **Окисление металлов** (коррозия) | Сталь, медь, серебро, бронза, чугун | 0.04–0.5 мм/год при влажности >60% |
| **Гидролиз полимеров** | Пластмассы, резина, шины, прокладки | Потеря 10–30% эластичности за 5 лет |
| **Деградация электроники** | Контакты, конденсаторы, IC | Tin whiskers, окисление выводов |
| **Окисление активных веществ** | Лекарства, витамины, БАД, масла | Потеря 5–15% активности/год |
| **Биологические процессы** | Бумага, кожа, текстиль, дерево | Плесень >70% RH; жуки-вредители |
| **Старение фотоматериалов** | Плёнка, фотобумага, цифровые носители | Уксусный синдром (acetate film), CD/DVD bit rot |

Источники: GOST 9.014-78 § 1.2; Maekawa S. «Oxygen-Free Environments in the Control of Museum Insect Pests» (Getty Conservation Institute, 1998).

### 1.2 Стоимость потерь

- **Фарма:** до 15% годной продукции списывается из-за нарушений хранения (источник: МВС Engineering, отраслевой обзор).
- **Food waste:** ~14% продовольствия теряется на этапе хранения (FAO «State of Food and Agriculture», 2019).
- **Военные запасы:** программа AMARG (Davis-Monthan, США) тратит десятки миллионов в год на консервацию ~3000 единиц авиатехники (нормативные документы 309th AMARG).
- **Коллекционные авто:** сезонные потери ~5–10% стоимости при хранении в неконтролируемой среде (отраслевые оценки страховщиков Hagerty, Chubb).

---

## 2. Классификация технологий долговременной защиты от окисления

| Класс | Принцип | Газ | Где используется |
|---|---|---|---|
| **Anoxic static** (статический бескислород) | Герметичная упаковка + кислород-абсорбер связывает остаточный O₂ | Воздух → постепенно <0.1% O₂ | Пища (Mountain House, Augason Farms), музеи мелких артефактов |
| **Inert gas flushing/purging** (продув) | Откачка O₂ + закачка N₂/Ar | N₂ или Ar | Промышленные стандарты MIL/ГОСТ, фарма, MAP пищи |
| **Inert gas blanketing** (одеяло) | Непрерывное поддержание инертной атмосферы | N₂ (преим.) | Танки нефти/масла, силосы зерна |
| **VCI** (летучие ингибиторы коррозии) | Молекулы испаряются в полости и адсорбируются на металле | — (без газа) | Cortec VpCI, Zerust ZCORR, Daubert — нефтегаз, военная техника |
| **Vacuum + barrier** | Откачка воздуха + ламинат с фольгой | — | Mil-spec MIL-PRF-131K, медицинские стерильные упаковки |
| **Гибридные системы** | Комбинация: газ + абсорбер + VCI + барьер | N₂ или Ar | Премиум-сегмент, единичные кейсы |

**Ниша Аслана = гибридная система**, упакованная в стандартизованный продукт.

---

## 3. Сравнение инертных газов

| Газ | Цена / м³ (опт) | Плотность кг/м³ | Реакционная способность | Производство | Применимость |
|---|---|---|---|---|---|
| **Азот (N₂)** | $0.10–0.50 | 1.25 | Инертен в стандартных условиях; реагирует с Li, Mg, Ti при T>800°C | PSA / мембраны / ASU; on-site | **95% применений** |
| **Аргон (Ar)** | $1.50–15.00 | 1.78 | Полностью инертен | ASU воздухоразделения; криодоставка | **Премиум-ниши** |
| **CO₂** | $0.20–0.60 | 1.98 | Кислотный, реагирует с водой → H₂CO₃; растворяется в жирах | Промышленный побочный продукт | MAP мяса (бактериостатик), не для долгосрочного |
| **Гелий (He)** | $30–60 | 0.18 | Полностью инертен; легко утекает | ASU + газовые месторождения | Только для специфических задач (поиск утечек) |
| **Криптон (Kr)** | $300–800 | 3.74 | Полностью инертен | ASU редкие фракции | **Экономически невозможно** для упаковки |
| **Ксенон (Xe)** | $5,000–15,000 | 5.89 | Полностью инертен (биологически активен — анестетик) | ASU редкие фракции | **Экономически невозможно** |

### Ключевой вывод по газам

**Аргон оправдан только когда:**
1. **Стоимость единицы товара покрывает 10× премию** (вино $50–500/бутылка; коллекционное авто €1M+; музейный артефакт; ювелирка).
2. **Молекулы крупнее → меньше утечки** через микропоры барьерного материала. Подтверждено выбором аргона для Декларации Независимости США (NIST «Preserving Founding Documents»).
3. **Плотность газа выше воздуха** → «затекает» в полости и вытесняет O₂ снизу (вино, оливковое масло — Coravin, Olive Oil Source).
4. **Нужна абсолютная инертность** — литий-металл, ультрачистая электроника, активные металлы при высокой T.

**Во всех остальных случаях — азот.** Получают on-site PSA-генератором, $0.4–1.0/CCF.

**Ксенон и криптон убираем из продуктовой линейки** — экономика не сходится никогда.

Источники:
- Coravin «Why Argon Gas Is the Best Wine Preserver» — премиум-кейс.
- Manufacturing.net «Nitrogen Blanketing of Edible Oils» — экономика N₂.
- Ossila «Argon vs Nitrogen Glove Box» — сравнительный анализ.
- NIST «Preserving Founding Documents» — выбор Ar для Декларации.

---

## 4. Барьерные материалы и толщины

### 4.1 Кислородопроницаемость (OTR) — главный параметр

OTR (Oxygen Transmission Rate) измеряется в см³ O₂ / (м² · сутки · атм) при 23°C, 0% RH (ASTM D3985, ISO 15105).

| Материал | OTR (см³/м²·день) | Толщина | Срок «насыщения O₂ до 1%» (для пакета 1 м³) |
|---|---|---|---|
| LDPE (обычный пакет) | 7800 | 50 мкм | <1 день |
| HDPE | 1500 | 100 мкм | ~5 дней |
| PA6 (полиамид) | 40 | 100 мкм | ~6 месяцев |
| PET | 50 | 100 мкм | ~5 месяцев |
| EVOH (32% ethylene) | 0.3 | 30 мкм | **~80 лет** (но боится влаги!) |
| **Aluminized PET** (Met-PET) | 0.5–2 | 100 мкм | ~10–40 лет |
| **Foil laminate** (PET/Al-foil/LLDPE) | <0.05 | 125–190 мкм | **>200 лет** |
| Стекло | 0 | — | бесконечность |

### 4.2 Реальные стандарты и материалы

**MIL-PRF-131K** (Mil-spec barrier material для long-term storage):
- Структура: PET / Al-foil / LLDPE
- Толщина: 0.0048″–0.0075″ (~120–190 мкм)
- OTR: <0.05 см³/м²·день
- Срок хранения: до 25 лет с десикантом
- Источник: [3D Barrier Bags MIL-PRF-131](https://www.3dbarrierbags.com/our-products/mil-prf-131/)

**MIL-PRF-22191 Type I** (transparent barrier):
- Структура: PVDC-coated PET или EVOH-coated multilayer
- Толщина: ~100 мкм
- OTR: 0.5–2.0 см³/м²·день
- Используется когда нужна визуальная инспекция

**MIL-PRF-81705F Type I** (электроника, ESD + влаго-барьер):
- Структура: Met-PET / PE / Foil / ESD-sealant
- Применение: ракетные системы, чувствительные к влаге сборки

**ГОСТ В 9.014-78** (РФ — консервация военной техники):
- Варианты защиты ВЗ-10/14/15/16: «защитная среда инертным газом — азотом по ГОСТ 9293-74»
- Требования к среде: точка росы ≤228 K (−45 °C), O₂ ≤0.05% об.
- Внутренняя упаковка ВУ-5: герметичный полимерный/металлизированный чехол
- **Аргон в ГОСТ В 9.014 не упомянут** — только азот

**Mylar (PET-laminate) для long-term food storage:**
- Толщина: 5–7 mil (≈125–175 мкм)
- Производители: Sorbent Systems / IMPAK (PAKVF4C), Wallaby, Augason Farms
- OTR: 0.05–0.5 см³/м²·день
- Срок хранения белого риса: 30 лет (с O₂-абсорберами)

**Фарма-блистеры:**
- PVC: 250 мкм базис
- PVC + PVDC (60–120 г/м²) — средний барьер
- PVC + Aclar (PCTFE 15–51 мкм) — высокий барьер
- Alu/Alu (OPA-Alu-PVC) — максимальный барьер

### 4.3 Рекомендация по толщинам для проекта

**Критическая ошибка исходного реферата ChatGPT:**
В таблице предложены толщины 50–150 мкм голого ПЭТ/ПА. Для долговременного (10+ лет) хранения этого **недостаточно** — O₂ просочится за 2–5 лет.

**Реальная рекомендация:**

| Срок хранения | Минимальная конструкция | Толщина |
|---|---|---|
| 1–3 года | Met-PET + PE | 80–100 мкм |
| 5–10 лет | Met-PET / PE / Foil-laminate | 100–150 мкм |
| 10–25 лет | **PET / Al-foil / LLDPE (mil-spec)** | 125–190 мкм |
| 25–50 лет | **PET / Al-foil / LLDPE + жёсткая капсула** (стекло/титан/композит) | 200+ мкм |
| 50–200 лет | **Стеклянная/титановая капсула с аргоном** (Декларация Независимости) | стекло + Ti |

---

## 5. Кислород-абсорберы

Ключевая инновация Mitsubishi Gas Chemical: **iron-based и organic-based oxygen scavengers**, химически связывающие остаточный O₂ внутри упаковки.

### 5.1 Линейка Mitsubishi

| Продукт | Тип | O₂-ёмкость | Применение |
|---|---|---|---|
| **Ageless Z** | Iron-based, влажный режим | 100 cc/sachet и больше | Пища, БАД |
| **Ageless ZP** | Iron-based, сухой режим | 100–500 cc | Сухие продукты, орехи |
| **Ageless OMAC** | Organic | 50–200 cc | Электроника (без металлической пыли) |
| **RP System Type AN** | Iron-based + влагопоглотитель | 100 cc | Музейные артефакты |
| **RP System Type K** | Iron-based, сухой | 100 cc | Сухая среда, металлы, документы |
| **Pharmakeep** | Organic | 5–100 cc | Фармацевтические таблетки, капсулы |

Источник: [Mitsubishi Gas Chemical — Ageless](https://www.mgc.co.jp/eng/products/sc/ageless/), [Pharmakeep](https://www.mgcs.com.sg/pharmakeep), [Conservation Support Systems — RP System](https://conservationsupportsystems.com/product/show/ageless-rp-system-type-an/oxygen-absorbers-mitsubishi-ageless-rp).

### 5.2 Расчёт количества абсорбера

Для герметичного пакета объёмом V (литров) с воздухом, содержащим 21% O₂:
- Количество O₂ = 0.21 × V × 1000 см³
- Например, V = 1 м³ → ~210,000 см³ O₂ → нужно 2100 cc абсорбер-ёмкости (≈21 сашé по 100 cc)

**В капсуле для авто (V ≈ 6 м³):** при газовом продуве N₂ остаточный O₂ ~1% = 60,000 см³ O₂ → достаточно 6 сашé Ageless Z 100 cc как страховки.

### 5.3 Ключевой принцип проекта

> **Газовый продув + кислород-абсорбер = двойная защита.**
> Газ выдавливает 99% воздуха, абсорбер связывает оставшееся.
> Без абсорбера любая микроутечка через 6–12 месяцев превращает капсулу в обычный пакет.

---

## 6. IoT-мониторинг (свободная ниша)

В существующих решениях нет встроенного датчика остаточного O₂ и герметичности. Это **вторая патентная зона** для проекта.

### 6.1 Доступные сенсоры

| Параметр | Технология | Диапазон | Цена за датчик |
|---|---|---|---|
| **O₂ residual** | Электрохимический (City Tech, Honeywell) | 0–25% O₂, точность ±0.1% | $30–80 |
| **O₂ residual (low-cost)** | Optical fluorescence | 0–1% O₂, точность ±0.05% | $200–500 |
| **Влажность RH** | Capacitive (Sensirion SHT4x, Bosch BME280) | 0–100% RH | $5–15 |
| **Утечка / давление** | MEMS pressure (Bosch BMP388) | 300–1100 hPa | $5–10 |
| **Температура** | Встроена в большинство сенсоров | — | — |
| **RFID/BLE передача** | Sub-GHz LoRa или BLE 5.0 | — | $10–30 |

**Итого датчик «O₂ + RH + P + T + BLE»: $50–200 в опте.**

### 6.2 Архитектура системы мониторинга

```
[Капсула с инертным газом]
    ├── Датчик O₂/RH/P/T (внутри капсулы, на батарейке CR2032, ресурс 5–10 лет)
    ├── BLE-маяк (раз в час)
    └── Внешний концентратор (один на склад) → Cloud (Telegram/email-алерт)
```

Аналог в мире: **NIST для Декларации Независимости** мониторит свои капсулы 20 лет — но это дорогое штучное решение. Стандартизованный «датчик в каждый пакет» — никто не делает.

---

## 7. Рекомендации по нишам (продуктовая сетка)

| Ниша | Газ | Конструкция | Толщина | Размер | Цена опт | Цена розница |
|---|---|---|---|---|---|---|
| **Гаражная капсула под коллекционное авто** | N₂ + 6 сашé Ageless Z | Жёсткий каркас + foil-laminate / стеклокомпозит | 200–400 мкм | 5×2×1.5 м | $1,500–4,000 | $5,000–15,000 |
| **Капсула под мотоцикл / классику** | N₂ + 4 сашé | Foil-laminate с молнией | 150–200 мкм | 2.5×1×1.5 м | $400–800 | $1,500–3,000 |
| **Оружейный пакет / охотничий** | N₂ | Foil-laminate (mil-spec) | 150 мкм | 1.5×0.3×0.1 м | $30–80 | $150–400 |
| **Стратегические резервы лекарств** | N₂ | Medical-grade Al-foil | 100 мкм | 0.3×0.2×0.05 м | $1–5 / шт | тендер ₽ за партию |
| **Архивная капсула (документы, иконы, монеты)** | **Ar + RP-System Type K** | Aluminized PET + жёсткий каркас | 100–150 мкм | разные | $50–200 | $200–800 |
| **Капсула под слитки золота / коллекционные часы** | **Ar + Ageless OMAC** | Жёсткая стеклянная/металлическая капсула | — | 0.3×0.3×0.1 м | $80–250 | $300–1,200 |
| **Премиум-винные/виски капсулы** | **Ar** | Многослойный пакет вокруг бутылки | — | под бутылку | $5–15 | $30–100 |
| **Капсула-репликатор музейной витрины (ГИМ/Эрмитаж/локальные)** | **Ar + RP-System Type AN** | Стекло-Ti с уплотнениями + IoT | — | по ТЗ | под заказ | $5,000–50,000 |

### 7.1 Экономическое обоснование (юнит-экономика капсулы под авто)

**Себестоимость:**
- Foil-laminate (mil-spec) 30 м² × $15/м² = $450
- Жёсткий каркас (трубы + профиль) = $200
- Молния промышленная (YKK Aquaseal) 8 м × $20 = $160
- N₂-картриджи или подключение к стандартному баллону 50 л = $100
- 6 сашé Ageless Z = $30
- IoT-датчик = $80
- Сборка, упаковка, логистика = $300
- **Итого себестоимость: ~$1,320**

**Цена розница: $5,000–15,000** в зависимости от премиальности и комплектации.
**Маржа: 70–90%.**

**Целевой клиент:** коллекционер авто стоимостью €500k+. Капсула за €5k = 1% от цены машины за 25–50 лет защиты. Эластичность спроса очень низкая.

### 7.2 Объём рынка (для трёх первых ниш)

- **Коллекционные авто в мире:** ~5 млн машин (Hagerty Insurance, 2024). Если 1% владельцев купят капсулу — 50,000 шт × $10k = **$500M**.
- **Российский Росрезерв и Минздрав:** годовой бюджет на стратегические запасы ~₽200B; даже 0.5% на современную упаковку = ₽1B/год.
- **Музейные витрины РФ + Казахстан:** ~5,000 музеев с бюджетом >₽1M/год; 1% покупает капсулу/год = 50 капсул × ₽1M = ₽50M/год.

---

## 8. Стандарты и сертификация

### Применимые российские:
- **ГОСТ 9.014-78 / ГОСТ В 9.014** — Защита от коррозии при хранении (варианты ВЗ-10/14/15/16)
- **ГОСТ 9293-74** — Азот газообразный и жидкий (требования чистоты)
- **ГОСТ Р 52684** — Упаковка пищевая в модифицированной газовой среде
- **ГОСТ ISO 11607** — Упаковка для медицинских изделий, подлежащих стерилизации
- **ГОСТ 26663-85** — Транспортные пакеты (для крупных капсул)

### Применимые международные:
- **MIL-STD-2073-1E w/CHG-4** (US DoD, 2019) — Methods of Preservation
- **MIL-PRF-131K** — Barrier Material, Watervaporproof, Greaseproof, Flexible, Heat-Sealable
- **MIL-PRF-22191** — Barrier Material, Transparent
- **MIL-PRF-81705F** — Barrier Material, Flexible, Electrostatic Protective
- **MIL-PRF-3420** — VCI packaging
- **ISO 15106** — Кислородопроницаемость (OTR) — методы измерения
- **ASTM D3985** — Standard Test Method for OTR through Plastic Film

### Дорожная карта сертификации:
1. **Этап 1:** ГОСТ Р + декларация соответствия ТР ТС → выход на РФ-рынок (3–6 мес).
2. **Этап 2:** Сертификация ВУ-5 ГОСТ В 9.014 → допуск к гособоронзаказу (12–18 мес).
3. **Этап 3:** Аудит MIL-PRF-131K → экспорт США/НАТО (опционально, 12–24 мес).
4. **Этап 4:** Патент ЕАЭС + PCT → защита ИС (6–12 мес параллельно).

---

## 9. Список реальных источников

### Музейная и архивная консервация
- Maekawa S. (1998). *Oxygen-Free Environments in the Control of Museum Insect Pests.* Getty Conservation Institute. [oxygenfree.pdf](https://www.getty.edu/conservation/publications_resources/pdf_publications/pdf/oxygenfree.pdf)
- National Archives, USA. *Re-encasement of the Charters of Freedom* (Декларация Независимости в аргоне). [archives.gov/press/press-kits/charters.html](https://www.archives.gov/press/press-kits/charters.html)
- NIST. *Using Science to Preserve America's Founding Documents.* [nist.gov/preserving-past](https://www.nist.gov/preserving-past/historical-documents/using-science-preserve-americas-founding-documents)
- Library of Congress. *Anoxic Encasements.* [loc.gov/preservation/scientists/projects/anoxic_cases.html](https://www.loc.gov/preservation/scientists/projects/anoxic_cases.html)
- Museum Pests Working Group. *Solutions: Nitrogen/Argon Gas Treatment.* [museumpests.net](https://museumpests.net/solutions-nitrogenargon-gas-treatment/)
- AIC Conservation Wiki. *Anoxia.* [conservation-wiki.com/wiki/Anoxia](https://www.conservation-wiki.com/wiki/Anoxia)

### Кислород-абсорберы и барьерные материалы
- Mitsubishi Gas Chemical. *Ageless Oxygen Absorbers.* [mgc.co.jp/eng/products/sc/ageless](https://www.mgc.co.jp/eng/products/sc/ageless/)
- Mitsubishi Gas Chemical. *Pharmakeep — Organic Oxygen Absorber.* [mgcs.com.sg/pharmakeep](https://www.mgcs.com.sg/pharmakeep)
- Conservation Support Systems. *RP System Type-AN.* [conservationsupportsystems.com](https://conservationsupportsystems.com/product/show/ageless-rp-system-type-an/oxygen-absorbers-mitsubishi-ageless-rp)
- TALAS. *Mitsubishi Oxygen Absorbers RP-A & RP-K.* [talasonline.com](https://www.talasonline.com/Mitsubishi-Oxygen-Absorber-RP-A-RP-K)
- Sorbent Systems. *Mylar Bags.* [sorbentsystems.com/mylar.html](https://www.sorbentsystems.com/mylar.html)
- IMPAK Corporation. [impakcorporation.com](https://www.impakcorporation.com/Articles/About-IMPAK)

### Военные и индустриальные стандарты
- DoD. *MIL-STD-2073-1E w/CHG-4* (2019). [s3vi.ndc.nasa.gov / MIL-STD-2073](https://s3vi.ndc.nasa.gov/ssri-kb/static/resources/MIL-STD-2073_1E_CHG-4.pdf)
- *MIL-STD-2073 Methods Lookup.* [camphill.leidos.com](https://camphill.leidos.com/code_lookup.nsf/methods?OpenPage=)
- 3D Barrier Bags. *MIL-PRF-131.* [3dbarrierbags.com](https://www.3dbarrierbags.com/our-products/mil-prf-131/)
- 3D Barrier Bags. *MIL-PRF-81705.* [3dbarrierbags.com](https://www.3dbarrierbags.com/our-products/mil-prf-81705/)
- Royco Packaging. *MIL-DTL-117 Barrier Bags Explained.* [roycopackaging.com](https://www.roycopackaging.com/blogs/news/mil-dtl-117-barrier-bags-explained-military-packaging-specifications-and-applications)
- ГОСТ 9.014-78. ЕСЗКС. Временная противокоррозионная защита изделий. [docs.cntd.ru/document/1200004940](http://docs.cntd.ru/document/1200004940)
- ГОСТ 9293-74. Азот газообразный и жидкий. [docs.cntd.ru/document/1200006220](https://docs.cntd.ru/document/1200006220)

### VCI и альтернативные технологии
- Cortec Corporation. *VpCI Films & Bags.* [cortecvci.com](https://www.cortecvci.com/cortec-vci-films/)
- Cortec. *VCI vs Nitrogen — Bavarian paper 5450.* [cortecvci.com Publications](https://www.cortecvci.com/Publications/Papers/VCI_and_Nitrogen_Bavarian_paper_5450.pdf)
- Daubert Cromwell. *Military Packaging.* [daubertcromwell.com](https://daubertcromwell.com/products/military-packaging/)
- Zerust. *VCI Gun Storage Bags.* [zerustproducts.com](https://www.zerustproducts.com/products/firearms-ammo-weapons/vci-gun-storage-bags/)
- Arms Preservation Inc. [apistoragebags.com](https://apistoragebags.com/)

### Авто-сегмент (текущие конкуренты)
- CarCapsule. [carcapsule.com](https://carcapsule.com/showcase/)
- Carcoon Storage Systems. [carcoon.com](https://www.carcoon.com/)
- AutoPyjama PermaBag. [autopyjama.com](https://www.autopyjama.com/permabag-engl/cars/)
- SSR Performance Munich (подземный гараж с N₂). [ssr-performance.de](https://ssr-performance.de/car-storage/?lang=en)

### MAP пища и фарма
- Coravin. *Why Argon Gas.* [coravin.com](https://www.coravin.com/blogs/community/why-argon-gas-is-the-best-wine-preserver)
- Air Liquide. *Modified Atmosphere Packaging.* [airliquide.com](https://uk.airliquide.com/solutions/modified-atmosphere-packaging-map)
- Air Products. *Pharma Packaging Inerting/Blanketing.* [airproducts.com](https://www.airproducts.com/applications/packaging-inerting-blanketing-pharmaceuticals)
- MVS Engineering. *Nitrogen in Pharma.* [mvsengg.com](https://www.mvsengg.com/blog/nitrogen-is-widely-used-in-the-pharma-industry-for-blanketing-handling-and-packaging/)
- Sealed Air. *CRYOVAC MAP Trays.* [sealedair.com](https://www.sealedair.com/products/food-packaging/preformed-rigid-trays/map-trays)
- Manufacturing.net. *Nitrogen Blanketing of Edible Oils.* [manufacturing.net](https://www.manufacturing.net/operations/article/13183952/nitrogen-blanketing-of-edible-oils-part-i)

### Патенты (ближайшие, для патентного поиска)
- US5659932A — Burial capsule with inert gas. [patents.google.com](https://patents.google.com/patent/US5659932A/en)
- US7723701B1 — Specimen preservation. [patents.google.com](https://patents.google.com/patent/US7723701B1/en)
- CN203497420U — Vacuum bag для авточехла (без газа). [patents.google.com](https://patents.google.com/patent/CN203497420U/en)

### Рынок
- MarketsAndMarkets. *Top Food Packaging Companies.* [marketsandmarkets.com](https://www.marketsandmarkets.com/ResearchInsight/food-packaging-market.asp)
- Hagerty Insurance Annual Reports — collector-car market.
- AMARG (309th Aerospace Maintenance and Regeneration Group). [airandspaceforces.com](https://www.airandspaceforces.com/article/0213boneyard/)

---

## 10. Что в исходном файле было неверно (для внутреннего использования)

В диалоге Аслана с ChatGPT от 2026-05-04 модель сгенерировала ряд **галлюцинаций** — выдуманных авторов и работ, которые проверить невозможно:

- ❌ «Stenmarck, Å., Jensen, C., Quested, T., Moates, G. (2017). Environmental impact of packaging and food losses in a life cycle perspective.» — реальной публикации с такими авторами и точно таким названием в открытых источниках не найдено.
- ❌ «Jong, P. (2019). Innovative Food Preservation Technologies and Their Potential Applications in the Food Industry.» — не находится.
- ❌ «David Harris. Protective Atmospheres for Food Preservation» — автор и работа не идентифицируются.
- ❌ «Robert Johnson. Inert Gases: At the Vanguard of Modern Medicine and Technology» — не идентифицируется.
- ❌ Рекомендация ксенона/криптона как практичного наполнителя — экономически невозможно.
- ❌ Толщины 50–150 мкм без указания фольгированного ламината — недостаточно для долгосрочного хранения.

**Эти источники во внешних материалах не использовать.** Заменены реальными в разделе 9.

---

## 11. План работ — что дальше

### Этап 1: Подготовка (1–2 месяца)
- [ ] Финализировать техническую справку (этот документ — v1, доработать с экспертами).
- [ ] Юридическая проверка патентной чистоты в патентных поверенных РФ + PCT.
- [ ] Подача провизорной патентной заявки ЕАЭС.
- [ ] Поиск производителя foil-laminate в РФ/Казахстане (Микроласт, Биаксплен, Полипак).
- [ ] Поиск поставщика IoT-датчиков O₂ (Sensirion, Honeywell, российские «Интех»).

### Этап 2: Прототип (3–6 месяцев)
- [ ] Изготовление 3 прототипов:
  - Гаражная капсула под мотоцикл (тестовая, минимальная).
  - Архивная капсула под коллекцию монет/документов.
  - Капсула под слитки золота / часы (премиум).
- [ ] 6-месячный тест: замер O₂ внутри каждый день через IoT-датчик.
- [ ] Параллельный контрольный образец без инертного газа.

### Этап 3: Питч и продажи (6–12 месяцев)
- [ ] Презентация для коллекционеров (РФ, ОАЭ, Казахстан).
- [ ] Тендерные заявки в Росрезерв, Минздрав, Минобороны.
- [ ] Переговоры с музеями (ГИМ, Эрмитаж, ГМИИ).
- [ ] Возможная партнёрская модель с Mitsubishi Gas Chemical (поставка O₂-абсорберов как OEM).

### Этап 4: Серия (12+ месяцев)
- [ ] Выход в серийное производство в РФ.
- [ ] Расширение линейки (винные капсулы, премиум-сегмент).
- [ ] Экспорт в ОАЭ, Саудовскую Аравию, Сингапур, Гонконг, Швейцарию (рынки коллекционных авто и часов).

---

**Документ актуализируется. Версия 1.0 от 2026-05-08.**

Контакты заказчика: Аслан КАА · idriskaaa@gmail.com · aslankaa.com
