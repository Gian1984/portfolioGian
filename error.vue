<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: () => (is404.value ? 'Page not found — Gianluca Tiengo' : 'Something went wrong — Gianluca Tiengo'),
  robots: 'noindex, nofollow',
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-pink-500">{{ error?.statusCode ?? 500 }}</p>
      <h1 class="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {{ is404 ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        {{ is404
          ? "Sorry, the page you're looking for doesn't exist or has been moved."
          : 'An unexpected error occurred. Please try again.' }}
      </p>
      <div class="mt-10">
        <button
          type="button"
          class="rounded-md bg-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-600"
          @click="handleError"
        >
          Back to homepage
        </button>
      </div>
    </div>
  </div>
</template>
