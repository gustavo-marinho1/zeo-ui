import { describe, test, expect, beforeEach } from 'vitest';
import { act, screen } from '@testing-library/react';
import { LeftCorner } from '@/components/header/left-corner';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setViewportWidth } from '@/utils/test-utils';

describe('LeftCorner', () => {
  beforeEach(() => {
    // Reset the default screen size before each test
    setViewportWidth(1920);
  });

  test('should control the visibility of the button based on the screen size (Responsiveness)', () => {
    // same test is done in sidebar.test.tsx
    setViewportWidth(640);
    renderWithRouter(<LeftCorner />);

    expect(screen.queryByTestId('sidebar-trigger')).not.toBeNull();

    act(() => setViewportWidth(768));

    expect(screen.queryByTestId('sidebar-trigger')).toBeNull();
  });

  test('left corner desktop options must be visible only when screen size >= 768px', () => {
    setViewportWidth(640);
    renderWithRouter(<LeftCorner />);

    expect(screen.queryByTestId('header-left-corner-desktop-options')).toBeNull();

    act(() => setViewportWidth(768));

    expect(screen.queryByTestId('header-left-corner-desktop-options')).not.toBeNull();

    act(() => setViewportWidth(640));

    expect(screen.queryByTestId('header-left-corner-desktop-options')).toBeNull();
  });

  test('Arrivals link must redirect to arrivals page', async () => {
    const user = userEvent.setup();

    setViewportWidth(768);
    renderWithRouter(<LeftCorner />, { route: '/' });

    const arrivalsLink = screen.queryByTestId('arrivals-link');
    await user.click(arrivalsLink);

    expect(screen.queryByText('Arrivals')).not.toBeNull();
  });

  test('About link must redirect to about page', async () => {
    const user = userEvent.setup();

    setViewportWidth(768);
    renderWithRouter(<LeftCorner />, { route: '/' });

    const aboutLink = screen.queryByTestId('about-link');
    await user.click(aboutLink);

    expect(screen.queryByText('About')).not.toBeNull();
  });

});
