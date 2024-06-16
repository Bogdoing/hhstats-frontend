<template>
    <section>
        <h1 class="text-4xl"><slot/></h1>
        <slot/>
    </section>
</template>


<!-- <template>
    <h2 class="format-title">
        <ContentSlot :use="$slots.default" unwrap="h1" />
    </h2>
</template> -->