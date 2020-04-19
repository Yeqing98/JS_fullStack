<template>
    <div class="survey">
        <div>
            <div class="real-time">
                <div class="survey-title">实时概况</div>
                <div class="survey-content" >
                    <div class="real-shop" v-for="(item, index) in realTime" :key="index">
                        <img :src="item.img" alt="" class="survey-img">
                        <div class="shop-money">
                            <div class="money-title">{{item.title}}</div>
                            <div class="money-num">{{item.money}}</div>
                            <div class="money-yesterday">昨天：{{item.yesterday}}</div>
                        </div>
                        <div class="shop-order">
                            <div class="order-title">{{item.orderTitle}}</div>
                            <div class="order-num">{{item.num}}</div>
                            <div class="order-yesterday">昨天：{{item.yesterdayNum}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common-use">
                <div class="common-title">常用功能</div>
                <div class="common-content">
                    <div class="common-item" v-for="(item, index) in commonUse" :key="index">
                        <img :src="item.img" alt="" class="common-img">
                        <div class="common-name">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            realTime: [
                {
                    title: "门店销售额（元）",
                    money: 920.00,
                    yesterday: 680.00,
                    orderTitle: "门店支付订单数",
                    num: 80,
                    yesterdayNum: 60,
                    img: 'data:image/png;base64,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'
                },
                {
                    title: "网店销售额（元）",
                    money: 381.00,
                    yesterday: 123.00,
                    orderTitle: "网店支付订单数",
                    num: 120,
                    yesterdayNum: 110,
                    img: 'data:image/png;base64,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'
                },
                {
                    title: "新增客户数",
                    money: 182,
                    yesterday: 123,
                    orderTitle: "支付客户数",
                    num: 90,
                    yesterdayNum: 97,
                    img: 'data:image/png;base64,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'
                },
                {
                    title: "新增会员数",
                    money: 89,
                    yesterday: 78,
                    orderTitle: "新增存储金额",
                    num: 568.00,
                    yesterdayNum: 693.00,
                    img: 'data:image/png;base64,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'
                }
            ],
            commonUse: [
                {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAHlBMVEVHcExkqv9kqv9kqv9kqf9kqv9kqv9lqv9iq/9lqv/PclyTAAAACXRSTlMARSLVj+61aQxzwkN3AAADpklEQVR42u2cO3PTQBCA105ITCcYXunMI4A7Mxkg7hSecZfAULgzEBLSZUIo3Hl4Dekwsmzu3yJZcmzH0d6urL1qt5c/6fZxe7vnBRhL+WS/YQqTt/uvqzAn1wokJBJsnUNUvhgBedqdgVw3IrI7zVg2QrI9YZQbUpCgKr1YMwu2agTlKIWsSUJ6qUZakpAw0cp3IyqbI0hTFtKPGSUjLF4EWZKG1CNIRxoyjCANaUjgQCWxUpblIT5ckofsQE0e8lfeuGLzaspD+nAoDxnIu0kUiKHlAmIciEIUohCFOIIMXrDD895zJiRKk1eZ8fkNwFceJHoC1tnZe9b5ALKPLrxkaYjk7hmQ+FBRZqYkkdRYkNEBnAX5Ez9xmQ9haX4nfuKUvVw5IDU+hOUpdT7EywdZ40NYeV87J4SVwfp8yOgRVi5+xHdGn12p8PgQzFb49giI1XMO3yEgngVIJOJEyFHdocwL9T1uiWqIFTcAebEKA/IP+3TIPODzvLGNKREwY+kw3eSUCUEfytobOkzI6PNXGGdPbHkBUyS97tJDDQUwk6QH+zpq8lmQgFdn9dAIAWgsogaW5JVqbIjPUUoPr5gCmkdR3bENaJ4GaMSjRvsqHk8zIWGXHoiTF/qZ43zi0424biliA3YUIKb2STkeKfmDJVKUyLa1kus451Er+b7NcRHIJtCCZPLJlVYuSGIzdldpW3tvYAtI1vZK0LWGOcCPmvE6WD7ls72dBNawZ3HIdFGXchcLErPBt/q0+9bMDUl2LighS7FL6SKCfS8C+GXTumV3A4IvIwuWLlZpkQJO2iSEcoaFfUhfYn2hKtG4dVu6MBo/ArvSKKUoD6GMGdZ8wwYZjn+oNLdi78kNamttwz9r2s/ecAiOzzrtzYUhU23725OqWTB1l+OuWRgyc8/h28nHx613G3vHUzcsbFonQabvOVwgFcKuRoCEHgahXH2gFLUG1WzGfVMQxPQzKfdMYZDMbyF9B7n4PLhQLzdMoRATPptDlF+agiHGHJxbsgf0AzijZBoe3Jp4x81PjEoCry77ZOvqw+7vO1desSqH2j9RiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFECEteUbo5s/Fh/KQgZs/fHfkIUM3f8J3Mk7AyWAEJyMenAyrcDN2w8kAESejUJwMdXEznsbJoB0nI4PcDD9yMsbJzUAq+CEF2XY9JMzNuDMng9sKH0EXTI+g+w8sqxELErbLigAAAABJRU5ErkJggg==',
                    name: "发现门店商品"
                },
                {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAHlBMVEVHcExkqv9kqv9kqv9kqf9kqv9kqv9lqv9iq/9lqv/PclyTAAAACXRSTlMARSLVj+61aQxzwkN3AAADpklEQVR42u2cO3PTQBCA105ITCcYXunMI4A7Mxkg7hSecZfAULgzEBLSZUIo3Hl4Dekwsmzu3yJZcmzH0d6urL1qt5c/6fZxe7vnBRhL+WS/YQqTt/uvqzAn1wokJBJsnUNUvhgBedqdgVw3IrI7zVg2QrI9YZQbUpCgKr1YMwu2agTlKIWsSUJ6qUZakpAw0cp3IyqbI0hTFtKPGSUjLF4EWZKG1CNIRxoyjCANaUjgQCWxUpblIT5ckofsQE0e8lfeuGLzaspD+nAoDxnIu0kUiKHlAmIciEIUohCFOIIMXrDD895zJiRKk1eZ8fkNwFceJHoC1tnZe9b5ALKPLrxkaYjk7hmQ+FBRZqYkkdRYkNEBnAX5Ez9xmQ9haX4nfuKUvVw5IDU+hOUpdT7EywdZ40NYeV87J4SVwfp8yOgRVi5+xHdGn12p8PgQzFb49giI1XMO3yEgngVIJOJEyFHdocwL9T1uiWqIFTcAebEKA/IP+3TIPODzvLGNKREwY+kw3eSUCUEfytobOkzI6PNXGGdPbHkBUyS97tJDDQUwk6QH+zpq8lmQgFdn9dAIAWgsogaW5JVqbIjPUUoPr5gCmkdR3bENaJ4GaMSjRvsqHk8zIWGXHoiTF/qZ43zi0424biliA3YUIKb2STkeKfmDJVKUyLa1kus451Er+b7NcRHIJtCCZPLJlVYuSGIzdldpW3tvYAtI1vZK0LWGOcCPmvE6WD7ls72dBNawZ3HIdFGXchcLErPBt/q0+9bMDUl2LighS7FL6SKCfS8C+GXTumV3A4IvIwuWLlZpkQJO2iSEcoaFfUhfYn2hKtG4dVu6MBo/ArvSKKUoD6GMGdZ8wwYZjn+oNLdi78kNamttwz9r2s/ecAiOzzrtzYUhU23725OqWTB1l+OuWRgyc8/h28nHx613G3vHUzcsbFonQabvOVwgFcKuRoCEHgahXH2gFLUG1WzGfVMQxPQzKfdMYZDMbyF9B7n4PLhQLzdMoRATPptDlF+agiHGHJxbsgf0AzijZBoe3Jp4x81PjEoCry77ZOvqw+7vO1desSqH2j9RiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFECEteUbo5s/Fh/KQgZs/fHfkIUM3f8J3Mk7AyWAEJyMenAyrcDN2w8kAESejUJwMdXEznsbJoB0nI4PcDD9yMsbJzUAq+CEF2XY9JMzNuDMng9sKH0EXTI+g+w8sqxELErbLigAAAABJRU5ErkJggg==',
                    name: "发现网店商品"
                },
                {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAHlBMVEVHcExkqv9kqv9kqv9kqf9kqv9kqv9lqv9iq/9lqv/PclyTAAAACXRSTlMARSLVj+61aQxzwkN3AAADpklEQVR42u2cO3PTQBCA105ITCcYXunMI4A7Mxkg7hSecZfAULgzEBLSZUIo3Hl4Dekwsmzu3yJZcmzH0d6urL1qt5c/6fZxe7vnBRhL+WS/YQqTt/uvqzAn1wokJBJsnUNUvhgBedqdgVw3IrI7zVg2QrI9YZQbUpCgKr1YMwu2agTlKIWsSUJ6qUZakpAw0cp3IyqbI0hTFtKPGSUjLF4EWZKG1CNIRxoyjCANaUjgQCWxUpblIT5ckofsQE0e8lfeuGLzaspD+nAoDxnIu0kUiKHlAmIciEIUohCFOIIMXrDD895zJiRKk1eZ8fkNwFceJHoC1tnZe9b5ALKPLrxkaYjk7hmQ+FBRZqYkkdRYkNEBnAX5Ez9xmQ9haX4nfuKUvVw5IDU+hOUpdT7EywdZ40NYeV87J4SVwfp8yOgRVi5+xHdGn12p8PgQzFb49giI1XMO3yEgngVIJOJEyFHdocwL9T1uiWqIFTcAebEKA/IP+3TIPODzvLGNKREwY+kw3eSUCUEfytobOkzI6PNXGGdPbHkBUyS97tJDDQUwk6QH+zpq8lmQgFdn9dAIAWgsogaW5JVqbIjPUUoPr5gCmkdR3bENaJ4GaMSjRvsqHk8zIWGXHoiTF/qZ43zi0424biliA3YUIKb2STkeKfmDJVKUyLa1kus451Er+b7NcRHIJtCCZPLJlVYuSGIzdldpW3tvYAtI1vZK0LWGOcCPmvE6WD7ls72dBNawZ3HIdFGXchcLErPBt/q0+9bMDUl2LighS7FL6SKCfS8C+GXTumV3A4IvIwuWLlZpkQJO2iSEcoaFfUhfYn2hKtG4dVu6MBo/ArvSKKUoD6GMGdZ8wwYZjn+oNLdi78kNamttwz9r2s/ecAiOzzrtzYUhU23725OqWTB1l+OuWRgyc8/h28nHx613G3vHUzcsbFonQabvOVwgFcKuRoCEHgahXH2gFLUG1WzGfVMQxPQzKfdMYZDMbyF9B7n4PLhQLzdMoRATPptDlF+agiHGHJxbsgf0AzijZBoe3Jp4x81PjEoCry77ZOvqw+7vO1desSqH2j9RiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFECEteUbo5s/Fh/KQgZs/fHfkIUM3f8J3Mk7AyWAEJyMenAyrcDN2w8kAESejUJwMdXEznsbJoB0nI4PcDD9yMsbJzUAq+CEF2XY9JMzNuDMng9sKH0EXTI+g+w8sqxELErbLigAAAABJRU5ErkJggg==',
                    name: "客服系统"
                },
                {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAHlBMVEVHcExkqv9kqv9kqv9kqf9kqv9kqv9lqv9iq/9lqv/PclyTAAAACXRSTlMARSLVj+61aQxzwkN3AAADpklEQVR42u2cO3PTQBCA105ITCcYXunMI4A7Mxkg7hSecZfAULgzEBLSZUIo3Hl4Dekwsmzu3yJZcmzH0d6urL1qt5c/6fZxe7vnBRhL+WS/YQqTt/uvqzAn1wokJBJsnUNUvhgBedqdgVw3IrI7zVg2QrI9YZQbUpCgKr1YMwu2agTlKIWsSUJ6qUZakpAw0cp3IyqbI0hTFtKPGSUjLF4EWZKG1CNIRxoyjCANaUjgQCWxUpblIT5ckofsQE0e8lfeuGLzaspD+nAoDxnIu0kUiKHlAmIciEIUohCFOIIMXrDD895zJiRKk1eZ8fkNwFceJHoC1tnZe9b5ALKPLrxkaYjk7hmQ+FBRZqYkkdRYkNEBnAX5Ez9xmQ9haX4nfuKUvVw5IDU+hOUpdT7EywdZ40NYeV87J4SVwfp8yOgRVi5+xHdGn12p8PgQzFb49giI1XMO3yEgngVIJOJEyFHdocwL9T1uiWqIFTcAebEKA/IP+3TIPODzvLGNKREwY+kw3eSUCUEfytobOkzI6PNXGGdPbHkBUyS97tJDDQUwk6QH+zpq8lmQgFdn9dAIAWgsogaW5JVqbIjPUUoPr5gCmkdR3bENaJ4GaMSjRvsqHk8zIWGXHoiTF/qZ43zi0424biliA3YUIKb2STkeKfmDJVKUyLa1kus451Er+b7NcRHIJtCCZPLJlVYuSGIzdldpW3tvYAtI1vZK0LWGOcCPmvE6WD7ls72dBNawZ3HIdFGXchcLErPBt/q0+9bMDUl2LighS7FL6SKCfS8C+GXTumV3A4IvIwuWLlZpkQJO2iSEcoaFfUhfYn2hKtG4dVu6MBo/ArvSKKUoD6GMGdZ8wwYZjn+oNLdi78kNamttwz9r2s/ecAiOzzrtzYUhU23725OqWTB1l+OuWRgyc8/h28nHx613G3vHUzcsbFonQabvOVwgFcKuRoCEHgahXH2gFLUG1WzGfVMQxPQzKfdMYZDMbyF9B7n4PLhQLzdMoRATPptDlF+agiHGHJxbsgf0AzijZBoe3Jp4x81PjEoCry77ZOvqw+7vO1desSqH2j9RiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFECEteUbo5s/Fh/KQgZs/fHfkIUM3f8J3Mk7AyWAEJyMenAyrcDN2w8kAESejUJwMdXEznsbJoB0nI4PcDD9yMsbJzUAq+CEF2XY9JMzNuDMng9sKH0EXTI+g+w8sqxELErbLigAAAABJRU5ErkJggg==',
                    name: "分销管理"
                },
                {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAHlBMVEVHcExkqv9kqv9kqv9kqf9kqv9kqv9lqv9iq/9lqv/PclyTAAAACXRSTlMARSLVj+61aQxzwkN3AAADpklEQVR42u2cO3PTQBCA105ITCcYXunMI4A7Mxkg7hSecZfAULgzEBLSZUIo3Hl4Dekwsmzu3yJZcmzH0d6urL1qt5c/6fZxe7vnBRhL+WS/YQqTt/uvqzAn1wokJBJsnUNUvhgBedqdgVw3IrI7zVg2QrI9YZQbUpCgKr1YMwu2agTlKIWsSUJ6qUZakpAw0cp3IyqbI0hTFtKPGSUjLF4EWZKG1CNIRxoyjCANaUjgQCWxUpblIT5ckofsQE0e8lfeuGLzaspD+nAoDxnIu0kUiKHlAmIciEIUohCFOIIMXrDD895zJiRKk1eZ8fkNwFceJHoC1tnZe9b5ALKPLrxkaYjk7hmQ+FBRZqYkkdRYkNEBnAX5Ez9xmQ9haX4nfuKUvVw5IDU+hOUpdT7EywdZ40NYeV87J4SVwfp8yOgRVi5+xHdGn12p8PgQzFb49giI1XMO3yEgngVIJOJEyFHdocwL9T1uiWqIFTcAebEKA/IP+3TIPODzvLGNKREwY+kw3eSUCUEfytobOkzI6PNXGGdPbHkBUyS97tJDDQUwk6QH+zpq8lmQgFdn9dAIAWgsogaW5JVqbIjPUUoPr5gCmkdR3bENaJ4GaMSjRvsqHk8zIWGXHoiTF/qZ43zi0424biliA3YUIKb2STkeKfmDJVKUyLa1kus451Er+b7NcRHIJtCCZPLJlVYuSGIzdldpW3tvYAtI1vZK0LWGOcCPmvE6WD7ls72dBNawZ3HIdFGXchcLErPBt/q0+9bMDUl2LighS7FL6SKCfS8C+GXTumV3A4IvIwuWLlZpkQJO2iSEcoaFfUhfYn2hKtG4dVu6MBo/ArvSKKUoD6GMGdZ8wwYZjn+oNLdi78kNamttwz9r2s/ecAiOzzrtzYUhU23725OqWTB1l+OuWRgyc8/h28nHx613G3vHUzcsbFonQabvOVwgFcKuRoCEHgahXH2gFLUG1WzGfVMQxPQzKfdMYZDMbyF9B7n4PLhQLzdMoRATPptDlF+agiHGHJxbsgf0AzijZBoe3Jp4x81PjEoCry77ZOvqw+7vO1desSqH2j9RiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFECEteUbo5s/Fh/KQgZs/fHfkIUM3f8J3Mk7AyWAEJyMenAyrcDN2w8kAESejUJwMdXEznsbJoB0nI4PcDD9yMsbJzUAq+CEF2XY9JMzNuDMng9sKH0EXTI+g+w8sqxELErbLigAAAABJRU5ErkJggg==',
                    name: "收入/体现"
                },
                {
                    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAHlBMVEVHcExkqv9kqv9kqv9kqf9kqv9kqv9lqv9iq/9lqv/PclyTAAAACXRSTlMARSLVj+61aQxzwkN3AAADpklEQVR42u2cO3PTQBCA105ITCcYXunMI4A7Mxkg7hSecZfAULgzEBLSZUIo3Hl4Dekwsmzu3yJZcmzH0d6urL1qt5c/6fZxe7vnBRhL+WS/YQqTt/uvqzAn1wokJBJsnUNUvhgBedqdgVw3IrI7zVg2QrI9YZQbUpCgKr1YMwu2agTlKIWsSUJ6qUZakpAw0cp3IyqbI0hTFtKPGSUjLF4EWZKG1CNIRxoyjCANaUjgQCWxUpblIT5ckofsQE0e8lfeuGLzaspD+nAoDxnIu0kUiKHlAmIciEIUohCFOIIMXrDD895zJiRKk1eZ8fkNwFceJHoC1tnZe9b5ALKPLrxkaYjk7hmQ+FBRZqYkkdRYkNEBnAX5Ez9xmQ9haX4nfuKUvVw5IDU+hOUpdT7EywdZ40NYeV87J4SVwfp8yOgRVi5+xHdGn12p8PgQzFb49giI1XMO3yEgngVIJOJEyFHdocwL9T1uiWqIFTcAebEKA/IP+3TIPODzvLGNKREwY+kw3eSUCUEfytobOkzI6PNXGGdPbHkBUyS97tJDDQUwk6QH+zpq8lmQgFdn9dAIAWgsogaW5JVqbIjPUUoPr5gCmkdR3bENaJ4GaMSjRvsqHk8zIWGXHoiTF/qZ43zi0424biliA3YUIKb2STkeKfmDJVKUyLa1kus451Er+b7NcRHIJtCCZPLJlVYuSGIzdldpW3tvYAtI1vZK0LWGOcCPmvE6WD7ls72dBNawZ3HIdFGXchcLErPBt/q0+9bMDUl2LighS7FL6SKCfS8C+GXTumV3A4IvIwuWLlZpkQJO2iSEcoaFfUhfYn2hKtG4dVu6MBo/ArvSKKUoD6GMGdZ8wwYZjn+oNLdi78kNamttwz9r2s/ecAiOzzrtzYUhU23725OqWTB1l+OuWRgyc8/h28nHx613G3vHUzcsbFonQabvOVwgFcKuRoCEHgahXH2gFLUG1WzGfVMQxPQzKfdMYZDMbyF9B7n4PLhQLzdMoRATPptDlF+agiHGHJxbsgf0AzijZBoe3Jp4x81PjEoCry77ZOvqw+7vO1desSqH2j9RiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFECEteUbo5s/Fh/KQgZs/fHfkIUM3f8J3Mk7AyWAEJyMenAyrcDN2w8kAESejUJwMdXEznsbJoB0nI4PcDD9yMsbJzUAq+CEF2XY9JMzNuDMng9sKH0EXTI+g+w8sqxELErbLigAAAABJRU5ErkJggg==',
                    name: "帮助中心"
                }
            ]
        }
    },
}
</script>

<style  scoped>
.survey{
    width: 100%;
    height: 100%;
}
.real-time{
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: #fff;
}
.survey-title{
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}
.survey-content{
    display: flex;
    flex-wrap: wrap;
}
.real-shop{
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-basis: 50%;
    align-content: center;
}
.survey-img{
    width: 58px;
    height: 58px;
    margin-right: 30px;
}
.shop-money{
    height: 72px;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.money-title{
    font-size: 12px;
    color: #666;
}
.money-num{
    font-size: 24px;
    color: #333;
}
.money-yesterday{
    font-size: 12px;
    color: #999;
}

.shop-order{
    height: 72px;
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: space-between;
}
.order-title{
    font-size: 12px;
    color: #666;
}
.order-num{
    font-size: 24px;
    color: #333;
}
.order-yesterday{
    font-size: 12px;
    color: #999;
}

.common-use{
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: #fff;
}
.common-title{
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}
.common-content{
    display: flex;
    flex-wrap: wrap;
}
.common-item{
    margin: 12px 0;
    padding-left: 20px;
    box-sizing: border-box;
    width: 33.3333%;
    display: flex;
    align-content: center;
    color: #666;
}
.common-img{
    width: 30px;
    height: 30px;
}
.common-name{
    margin-left: 10px;
    font-size: 14px;
    line-height: 30px;
}
</style>