import { describe, test, expect, beforeEach } from 'vitest';
import { act, screen, waitFor } from '@testing-library/react';
import { SideBar } from '@/components/sidebar/sidebar';
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event';
import { renderWithRouter } from '@/utils/test-utils';

// Function to simulate the change of screen size in Vitest
function setViewportWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  window.dispatchEvent(new Event('resize'));
}

describe('Sidebar', () => {

  beforeEach(() => {
    // Reset the default screen size before each test
    setViewportWidth(1920);
  });

  test('should control the visibility of the button based on the screen size (Responsiveness)', () => {
    setViewportWidth(640);
    renderWithRouter(<SideBar />);

    expect(screen.queryByTestId('sidebar-trigger')).not.toBeNull();

    act(() => {
      setViewportWidth(1280);
    });

    expect(screen.queryByTestId('sidebar-trigger')).toBeNull();
  });

  test('must open sidebar when clicking in the trigger button', async () => {
    setViewportWidth(640);
    renderWithRouter(<SideBar />);

    await userEvent.click(screen.queryByTestId('sidebar-trigger'));
    expect(screen.queryByTestId('sidebar-content')).not.toBeNull();
  });

  test('should close the sidebar when clicking outside of it', async () => {
    setViewportWidth(640);
    renderWithRouter(<SideBar />);

    // Opens the sidebar
    await userEvent.click(screen.queryByTestId('sidebar-trigger'));

    // Clicks on the external
    await userEvent.click(document.body, {
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });

    await waitFor(() => {
      expect(screen.queryByTestId('sidebar-content')).toBeNull();
    });
  });

  test('should close the sidebar when clicking in the close button', async () => {
    setViewportWidth(640);
    renderWithRouter(<SideBar />);

    // Opens the sidebar
    await userEvent.click(screen.queryByTestId('sidebar-trigger'));
    // Clicks on the close button
    await userEvent.click(screen.queryByTestId('sidebar-close-trigger'));

    await waitFor(() => {
      expect(screen.queryByTestId('sidebar-content')).toBeNull();
    });
  });

});
