import { vi, describe, test, expect, beforeEach } from 'vitest';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event';
import { renderWithRouter, setViewportWidth } from '@/utils/test-utils';
import { Search } from '../search';
import { SearchIcon } from 'lucide-react';

function setup() {
  renderWithRouter(<Search><SearchIcon /></Search>);
}

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

describe('Search modal', () => {

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('search-trigger should be visible in all screens', () => {
    setViewportWidth(640);
    setup();

    expect(screen.queryByTestId('search-trigger')).not.toBeNull();

    act(() => setViewportWidth(768));

    expect(screen.queryByTestId('search-trigger')).not.toBeNull();

    act(() => setViewportWidth(1024));

    expect(screen.queryByTestId('search-trigger')).not.toBeNull();

    act(() => setViewportWidth(1280));

    expect(screen.queryByTestId('search-trigger')).not.toBeNull();

    act(() => setViewportWidth(1920));

    expect(screen.queryByTestId('search-trigger')).not.toBeNull();
  });

  test('search-content should be visible when clicking in the trigger button', async () => {
    setup();

    await userEvent.click(screen.queryByTestId('search-trigger')!);
    expect(screen.queryByTestId('search-content')).not.toBeNull();
  });

  test('should close the search modal when clicking outside of it', async () => {
    setup();

    await userEvent.click(screen.queryByTestId('search-trigger')!);
    await userEvent.click(document.body, {
      pointerEventsCheck: PointerEventsCheckLevel.Never
    });

    await waitFor(() => {
      expect(screen.queryByTestId('search-content')).toBeNull();
    });
  });

  test('should close the search modal when clicking in the close button', async () => {
    setup();

    await userEvent.click(screen.queryByTestId('search-trigger')!);
    await userEvent.click(screen.queryByTestId('search-close-trigger')!);

    await waitFor(() => {
      expect(screen.queryByTestId('search-content')).toBeNull();
    });
  });

  test("should close the search modal when press ESC key", async () => {
    setup();

    await userEvent.click(screen.queryByTestId('search-trigger')!);
    await userEvent.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByTestId('search-content')).toBeNull();
    });
  });

  test("should not submit when search-field is empty", async () => {
    setup();

    await userEvent.click(screen.queryByTestId('search-trigger')!);
    await userEvent.click(screen.queryByTestId('search-submit')!);

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(screen.queryByTestId('search-content')).not.toBeNull();
    });
  });

  test("should submit and redirect when search-field is not empty", async () => {
    setup();

    await userEvent.click(screen.queryByTestId('search-trigger')!);
    await userEvent.type(screen.queryByTestId('search-field')!, 'shoes');
    await userEvent.click(screen.queryByTestId('search-submit')!);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
      expect(screen.queryByTestId('search-content')).toBeNull();
    });
  });

});
