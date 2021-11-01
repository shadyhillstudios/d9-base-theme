<?php

/**
 * Implements hook_theme_suggestions_page_alter().
 */
function d9_base_theme_theme_suggestions_page_alter(array &$suggestions, array $variables)
{
    if ($node = \Drupal::routeMatch()->getParameter('node')) {
        $content_type = $node->bundle();
        $suggestions[] = 'page__' . $content_type;
    }
}