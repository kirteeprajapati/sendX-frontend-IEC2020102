<!-- Behavior.vue -->
<template>
  <div>
    <h2>Behavior Screen</h2>
    <div class="max-w-lg mx-auto">
    
      <fieldset class="mb-5">
        <legend class="sr-only">
            Show the popup when visitor:
        </legend>

        <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
            <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Enters website
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2">
            <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Exists website
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-3" type="radio" name="countries" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
            <label for="country-option-3" class="text-sm font-medium text-gray-900 ml-2 block">
            On
            <label for="quantity">page scroll:</label>
    
    <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">

            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4">
            <label for="country-option-4" class="text-sm font-medium text-gray-900 ml-2 block">
            After
            <label for="quantity">seconds on website:</label>
    
    <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">

            </label>
        </div>
      </fieldset>
    </div>

    <h2>Advanced</h2>

    <div>
      <div class="max-w-lg mx-auto">
        <fieldset class="mb-5">
        <legend class="sr-only">
            How often the popup when visitor:
        </legend>

        <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
            <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Every page view
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2">
            <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Every new browser session
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-3" type="radio" name="countries" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
            <label for="country-option-3" class="text-sm font-medium text-gray-900 ml-2 block">
            After
            <label for="quantity">page scroll:</label>
    
    <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">
    days
            </label>
        </div>
        </fieldset>
      </div>

      <div class="max-w-lg mx-auto">
    
        <fieldset class="mb-5">
        <legend class="sr-only">
            When to stop showing popup when visitor:
        </legend>

        <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
            <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Never
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2">
            <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Exists website
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-3" type="radio" name="countries" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
            <label for="country-option-3" class="text-sm font-medium text-gray-900 ml-2 block">
            If the visitor
            <label for="quantity">page scroll:</label>
    
    <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">

            </label>
        </div>    
        </fieldset>
      </div>
    </div>

    <h4>Go back</h4>
    <button>Continue</button>
       



  </div>
</template>
