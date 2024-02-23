import { POST } from './route'; // Replace 'yourModule' with the actual path to your module

// Mock fetch function
global.fetch = jest.fn();

describe('POST function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns email when request is successful', async () => {
    // Mock request object
    const request = {
      json: jest.fn().mockResolvedValue({ id: 1 }), // Mock request.json() to resolve with an object containing an id
    };

    // Mock fetch response
    const mockResponse = {
      data: {
        email: 'test@example.com',
      },
    };

    // Mock fetch implementation
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Mock Response object
    global.Response = jest.fn().mockImplementation((data) => ({
      json: jest.fn().mockResolvedValue(mockResponse), // Mock Response.json() to resolve with the provided data
    }));

    // Call the POST function
    const result = await POST(request);

    // Assertions
    expect(request.json).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://reqres.in/api/users/1');
    expect(result).toBe('test@example.com');
  });
});
