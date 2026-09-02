import { describe, test, expect, beforeEach } from 'vitest';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event';
import { renderWithRouter, setViewportWidth } from '@/utils/test-utils';
import { Shop } from '@/components/header/shop';

describe('Shop', () => {

  beforeEach(() => {
    // Reset the default screen size before each test
    setViewportWidth(1920);
  });

  test('should control the visibility of the button based on the screen size (Responsiveness)', () => {
    setViewportWidth(640);
    renderWithRouter(<Shop><span className='text-sm'>Shop</span></Shop>);

    expect(screen.queryByTestId('shop-trigger')).toBeNull();

    act(() => setViewportWidth(768));

    expect(screen.queryByTestId('shop-trigger')).not.toBeNull();
  });

  test('must open shop menu when clicking in the trigger button', async () => {
    setViewportWidth(768);
    renderWithRouter(<Shop><span className='text-sm'>Shop</span></Shop>);

    await userEvent.click(screen.queryByTestId('shop-trigger'));
    expect(screen.queryByTestId('shop-content')).not.toBeNull();
  });

  test('should close the sidebar when clicking outside of it', async () => {
    setViewportWidth(768);
    renderWithRouter(<Shop><span className='text-sm'>Shop</span></Shop>);

    // Opens the sidebar
    await userEvent.click(screen.queryByTestId('shop-trigger'));
    expect(screen.queryByTestId('shop-content')).not.toBeNull();

    // Clicks on the external
    await userEvent.click(document.body, {
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });

    await waitFor(() => {
      expect(screen.queryByTestId('shop-content')).toBeNull();
    });
  });

  test('should close the shop menu when clicking in the close button', async () => {
    setViewportWidth(768);
    renderWithRouter(<Shop><span className='text-sm'>Shop</span></Shop>);

    // Opens the sidebar
    await userEvent.click(screen.queryByTestId('shop-trigger'));
    expect(screen.queryByTestId('shop-content')).not.toBeNull();

    // Clicks on the close button
    await userEvent.click(screen.queryByTestId('shop-close-trigger'));

    await waitFor(() => {
      expect(screen.queryByTestId('shop-content')).toBeNull();
    });
  });

});
