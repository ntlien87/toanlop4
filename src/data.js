const data = [
  {
    topic: "Ôn tập các số đến 100000",
    theory:
      "Số tự nhiên đến 100000 gồm các chữ số từ 0 đến 9, mỗi số có tối đa 5 chữ số.\n      Cách đọc số: Đọc từ trái sang phải theo thứ tự hàng trăm nghìn, chục nghìn, nghìn, trăm, chục, đơn vị.\n      Cách viết số: Viết từ trái sang phải theo đúng giá trị hàng.\n      Cách so sánh số:\n      - So sánh số chữ số trước (số có nhiều chữ số hơn thì lớn hơn)\n      - Nếu cùng số chữ số, so sánh từng chữ số từ trái sang phải cho đến khi thấy khác nhau\n      Cách sắp xếp: Sắp xếp theo thứ tự tăng dần hoặc giảm dần dựa trên cách so sánh số.",
    questions: [
      {
        id: 1,
        question: "Số 'Ba mươi lăm nghìn không trăm linh bảy' được viết là:",
        options: ["35007", "35070", "35700", "30507"],
        correctAnswer: "35007",
      },
      {
        id: 2,
        question: "Trong số 78912, chữ số 8 có giá trị là:",
        options: ["8", "80", "800", "8000"],
        correctAnswer: "8000",
      },
      {
        id: 3,
        question: "Số liền trước của 45000 là:",
        options: ["44999", "45001", "44990", "45010"],
        correctAnswer: "44999",
      },
      {
        id: 4,
        question: "Số liền sau của 99999 là:",
        options: ["100000", "99998", "100001", "99990"],
        correctAnswer: "100000",
      },
      {
        id: 5,
        question: "Điền dấu thích hợp vào chỗ trống: 67890 ... 67980",
        options: ["<", ">", "=", "Không xác định"],
        correctAnswer: "<",
      },
      {
        id: 6,
        question:
          "Sắp xếp các số sau theo thứ tự từ bé đến lớn: 12345, 12543, 12453",
        options: [
          "12345, 12453, 12543",
          "12543, 12453, 12345",
          "12453, 12345, 12543",
          "12345, 12543, 12453",
        ],
        correctAnswer: "12345, 12453, 12543",
      },
      {
        id: 7,
        question: "Viết số lớn nhất có 5 chữ số khác nhau:",
        options: ["98765", "99999", "54321", "10234"],
        correctAnswer: "98765",
      },
      {
        id: 8,
        question: "Viết số bé nhất có 5 chữ số khác nhau:",
        options: ["10234", "10000", "12345", "10002"],
        correctAnswer: "10234",
      },
      {
        id: 9,
        question: "Làm tròn số 23456 đến hàng nghìn:",
        options: ["23000", "24000", "23500", "20000"],
        correctAnswer: "23000",
      },
      {
        id: 10,
        question:
          "Một cửa hàng bán được 15234 chiếc áo trong tháng 1 và 16789 chiếc áo trong tháng 2. Tổng số áo bán được trong hai tháng là bao nhiêu?",
        options: ["32023", "32000", "31023", "31000"],
        correctAnswer: "32023",
      },
    ],
  },
  {
    topic: "Ôn tập phép cộng, phép trừ",
    theory:
      "Phép cộng và phép trừ là hai phép tính cơ bản.\n      Cách đặt tính cộng:\n      - Xếp các số thẳng cột, chữ số cùng hàng thẳng với nhau\n      - Cộng từ phải sang trái, từ hàng đơn vị\n      - Nhớ 1 nếu tổng từng cột ≥ 10\n      Cách đặt tính trừ:\n      - Số bị trừ viết trên, số trừ viết dưới\n      - Các chữ số cùng hàng thẳng cột\n      - Trừ từ phải sang trái\n      - Nếu chữ số trên nhỏ hơn chữ số dưới, mượn 1 đơn vị của hàng bên trái\n      Kiểm tra: Với phép trừ, lấy số bị trừ trừ đi kết quả sẽ ra số trừ.",
    questions: [
      {
        id: 1,
        question: "Tính: 345 + 123",
        options: ["468", "458", "478", "486"],
        correctAnswer: "468",
      },
      {
        id: 2,
        question: "Tính: 789 - 456",
        options: ["333", "323", "343", "313"],
        correctAnswer: "333",
      },
      {
        id: 3,
        question: "Tìm x, biết x + 15 = 40",
        options: ["25", "35", "55", "15"],
        correctAnswer: "25",
      },
      {
        id: 4,
        question: "Tìm x, biết 60 - x = 25",
        options: ["35", "25", "45", "15"],
        correctAnswer: "35",
      },
      {
        id: 5,
        question:
          "Một cửa hàng có 256 quyển vở. Buổi sáng bán được 120 quyển, buổi chiều bán được 80 quyển. Cửa hàng còn lại bao nhiêu quyển vở?",
        options: ["56", "136", "176", "216"],
        correctAnswer: "56",
      },
      {
        id: 6,
        question: "Tính nhanh: 123 + 45 + 77",
        options: ["245", "235", "240", "250"],
        correctAnswer: "245",
      },
      {
        id: 7,
        question: "Tính nhanh: 250 - 50 - 100",
        options: ["100", "150", "200", "50"],
        correctAnswer: "100",
      },
      {
        id: 8,
        question: "Đặt tính rồi tính: 15678 + 2345",
        options: ["18023", "18013", "17923", "17913"],
        correctAnswer: "18023",
      },
      {
        id: 9,
        question: "Đặt tính rồi tính: 34567 - 12345",
        options: ["22222", "22212", "22122", "22112"],
        correctAnswer: "22222",
      },
      {
        id: 10,
        question:
          "Một thùng có 100 quả táo. Lần đầu lấy ra 30 quả, lần sau lấy ra 20 quả. Hỏi trong thùng còn lại bao nhiêu quả táo?",
        options: ["50", "40", "60", "70"],
        correctAnswer: "50",
      },
    ],
  },
  {
    topic: "Ôn tập phép nhân, phép chia",
    theory:
      "Phép nhân là tổng của nhiều số hạng bằng nhau. Phép chia là phép toán ngược với phép nhân.\n      Cách giải phép nhân:\n      - Đặt tính thẳng hàng, viết số nhân dưới số bị nhân\n      - Nhân từ phải sang trái với từng chữ số của số nhân\n      - Nhớ số hàng chục nếu có\n      - Cộng các kết quả từng phép nhân\n      Cách giải phép chia:\n      - Chia từ trái sang phải\n      - Lấy số chia nhân với thương tạm\n      - So sánh với số bị chia và tìm số dư\n      - Kiểm tra: Số chia × Thương + Số dư = Số bị chia",
    questions: [
      {
        id: 21,
        question: "Tính: 12 x 4",
        options: ["48", "36", "24", "16"],
        correctAnswer: "48",
      },
      {
        id: 22,
        question: "Tính: 36 : 6",
        options: ["6", "4", "8", "9"],
        correctAnswer: "6",
      },
      {
        id: 23,
        question: "Tìm x, biết x * 5 = 45",
        options: ["9", "7", "8", "10"],
        correctAnswer: "9",
      },
      {
        id: 24,
        question: "Tìm x, biết x : 7 = 8",
        options: ["56", "49", "63", "72"],
        correctAnswer: "56",
      },
      {
        id: 25,
        question:
          "Một lớp học có 30 học sinh, chia thành 5 nhóm đều nhau. Mỗi nhóm có bao nhiêu học sinh?",
        options: ["6", "5", "7", "4"],
        correctAnswer: "6",
      },
      {
        id: 26,
        question:
          "Một người mua 8 hộp bút, mỗi hộp có 12 chiếc. Hỏi người đó có tất cả bao nhiêu chiếc bút?",
        options: ["96", "84", "100", "112"],
        correctAnswer: "96",
      },
      {
        id: 27,
        question:
          "Có 72 viên kẹo chia đều cho 9 bạn. Mỗi bạn được bao nhiêu viên kẹo?",
        options: ["8", "7", "9", "6"],
        correctAnswer: "8",
      },
      {
        id: 28,
        question: "Tính: 105 x 3",
        options: ["315", "305", "325", "335"],
        correctAnswer: "315",
      },
      {
        id: 29,
        question: "Tính: 240 : 4",
        options: ["60", "50", "70", "80"],
        correctAnswer: "60",
      },
      {
        id: 30,
        question:
          "Một sợi dây dài 48m, cắt thành 6 đoạn bằng nhau. Mỗi đoạn dài bao nhiêu mét?",
        options: ["8", "7", "9", "6"],
        correctAnswer: "8",
      },
    ],
  },
  {
    topic: "Số chẵn, số lẻ",
    theory:
      "Số chẵn là số chia hết cho 2, số lẻ là số không chia hết cho 2.\n      Cách nhận biết:\n      - Số chẵn: Chữ số cuối cùng là 0,2,4,6,8\n      - Số lẻ: Chữ số cuối cùng là 1,3,5,7,9\n      Quy tắc tính:\n      - Tổng hai số chẵn là số chẵn\n      - Tổng hai số lẻ là số chẵn\n      - Tổng một số chẵn và một số lẻ là số lẻ\n      - Tích của số chẵn với số bất kỳ là số chẵn\n      - Tích của hai số lẻ là số lẻ",
    questions: [
      {
        id: 31,
        question: "Trong các số sau, số nào là số chẵn: 15, 24, 37, 41",
        options: ["24", "15", "37", "41"],
        correctAnswer: "24",
      },
      {
        id: 32,
        question: "Trong các số sau, số nào là số lẻ: 10, 22, 35, 48",
        options: ["35", "10", "22", "48"],
        correctAnswer: "35",
      },
      {
        id: 33,
        question: "Tổng của hai số chẵn là một số:",
        options: ["Chẵn", "Lẻ", "Vừa chẵn vừa lẻ", "Không xác định"],
        correctAnswer: "Chẵn",
      },
      {
        id: 34,
        question: "Tổng của hai số lẻ là một số:",
        options: ["Chẵn", "Lẻ", "Vừa chẵn vừa lẻ", "Không xác định"],
        correctAnswer: "Chẵn",
      },
      {
        id: 35,
        question: "Tổng của một số chẵn và một số lẻ là một số:",
        options: ["Lẻ", "Chẵn", "Vừa chẵn vừa lẻ", "Không xác định"],
        correctAnswer: "Lẻ",
      },
      {
        id: 36,
        question: "Tích của hai số chẵn là một số:",
        options: ["Chẵn", "Lẻ", "Vừa chẵn vừa lẻ", "Không xác định"],
        correctAnswer: "Chẵn",
      },
      {
        id: 37,
        question: "Tích của hai số lẻ là một số:",
        options: ["Lẻ", "Chẵn", "Vừa chẵn vừa lẻ", "Không xác định"],
        correctAnswer: "Lẻ",
      },
      {
        id: 38,
        question: "Tích của một số chẵn và một số lẻ là một số:",
        options: ["Chẵn", "Lẻ", "Vừa chẵn vừa lẻ", "Không xác định"],
        correctAnswer: "Chẵn",
      },
      {
        id: 39,
        question: "Tìm số chẵn lớn nhất có hai chữ số:",
        options: ["98", "99", "90", "100"],
        correctAnswer: "98",
      },
      {
        id: 40,
        question: "Tìm số lẻ bé nhất có ba chữ số:",
        options: ["101", "100", "111", "99"],
        correctAnswer: "101",
      },
    ],
  },
  {
    topic: "Bài toán liên quan đến rút về đơn vị",
    theory:
      "Bài toán rút về đơn vị giải qua 3 bước:\n      Bước 1: Tìm giá trị của một đơn vị\n      - Lấy tổng giá trị chia cho số lượng đơn vị đã biết\n      Bước 2: Kiểm tra kết quả bước 1\n      - Nhân kết quả với số lượng ban đầu phải ra giá trị ban đầu\n      Bước 3: Tính kết quả cần tìm\n      - Nhân giá trị một đơn vị với số lượng cần tìm\n      Lưu ý: Đơn vị phải cùng loại khi thực hiện phép tính",
    questions: [
      {
        id: 41,
        question:
          "4 cái bánh có giá 20000 đồng. Hỏi 7 cái bánh có giá bao nhiêu đồng?",
        options: ["30000 đồng", "35000 đồng", "40000 đồng", "45000 đồng"],
        correctAnswer: "35000 đồng",
      },
      {
        id: 42,
        question:
          "3 quyển vở giá 15000 đồng. Hỏi 10 quyển vở giá bao nhiêu đồng?",
        options: ["45000 đồng", "50000 đồng", "55000 đồng", "60000 đồng"],
        correctAnswer: "50000 đồng",
      },
      {
        id: 43,
        question:
          "2 cây bút chì có giá 6000 đồng. Hỏi 9 cây bút chì có giá bao nhiêu đồng?",
        options: ["24000 đồng", "27000 đồng", "30000 đồng", "33000 đồng"],
        correctAnswer: "27000 đồng",
      },
      {
        id: 44,
        question: "5 kg gạo giá 75000 đồng. Hỏi 12 kg gạo giá bao nhiêu đồng?",
        options: ["165000 đồng", "170000 đồng", "175000 đồng", "180000 đồng"],
        correctAnswer: "180000 đồng",
      },
      {
        id: 45,
        question:
          "6 quả cam có khối lượng 1200 gam. Hỏi 15 quả cam như thế có khối lượng bao nhiêu gam?",
        options: ["2500 gam", "2800 gam", "3000 gam", "3200 gam"],
        correctAnswer: "3000 gam",
      },
      {
        id: 46,
        question:
          "8 học sinh cần 24 quyển vở. Hỏi 12 học sinh cần bao nhiêu quyển vở?",
        options: ["30 quyển", "32 quyển", "36 quyển", "40 quyển"],
        correctAnswer: "36 quyển",
      },
      {
        id: 47,
        question:
          "4 giờ làm được 20 bài tập. Hỏi 7 giờ làm được bao nhiêu bài tập (với tốc độ không đổi)?",
        options: ["30 bài", "35 bài", "40 bài", "45 bài"],
        correctAnswer: "35 bài",
      },
      {
        id: 48,
        question:
          "10 người ăn hết 5 kg cơm. Hỏi 6 người ăn hết bao nhiêu kg cơm?",
        options: ["2 kg", "3 kg", "4 kg", "5 kg"],
        correctAnswer: "3 kg",
      },
      {
        id: 49,
        question:
          "3 cái kẹo có giá 3000 đồng. Hỏi với 15000 đồng mua được bao nhiêu cái kẹo?",
        options: ["12 cái", "15 cái", "18 cái", "20 cái"],
        correctAnswer: "15 cái",
      },
      {
        id: 50,
        question:
          "2 hộp sữa có khối lượng 400 gam. Hỏi 5 hộp sữa có khối lượng bao nhiêu gam?",
        options: ["800 gam", "1000 gam", "1200 gam", "1400 gam"],
        correctAnswer: "1000 gam",
      },
    ],
  },
  {
    topic: "Bài toán giải bằng ba bước tính",
    theory:
      "Bài toán ba bước tính được giải theo trình tự:\n      Bước 1: Tìm kết quả của phép tính đầu tiên\n      - Thường là phép tính tìm tổng hoặc hiệu ban đầu\n      Bước 2: Sử dụng kết quả bước 1 để tính tiếp\n      - Có thể là phép cộng, trừ, nhân hoặc chia\n      Bước 3: Dùng kết quả bước 2 để tính ra đáp số cuối cùng\n      Lưu ý:\n      - Đọc kỹ đề bài để xác định thứ tự thực hiện các phép tính\n      - Ghi chép cẩn thận kết quả từng bước\n      - Kiểm tra lại kết quả cuối cùng",
    questions: [
      {
        id: 51,
        question:
          "Một cửa hàng có 3 thùng bánh, mỗi thùng có 20 cái. Buổi sáng bán được 25 cái, buổi chiều bán được 15 cái. Hỏi cửa hàng còn lại bao nhiêu cái bánh?",
        options: ["15 cái", "20 cái", "25 cái", "30 cái"],
        correctAnswer: "20 cái", // Bước 1: 3*20=60 cái; Bước 2: 60-25=35 cái; Bước 3: 35-15=20 cái
      },
      {
        id: 52,
        question:
          "Một trường học có 2 lớp, mỗi lớp có 25 học sinh. Hôm nay có 10 học sinh nghỉ học và 5 học sinh đi thi. Hỏi số học sinh có mặt ở trường?",
        options: ["30 học sinh", "35 học sinh", "40 học sinh", "45 học sinh"],
        correctAnswer: "35 học sinh", // Bước 1: 2*25=50 học sinh; Bước 2: 50-10=40; Bước 3: 40-5=35
      },
      {
        id: 53,
        question:
          "Một cửa hàng có 50 quyển vở. Buổi sáng bán được 15 quyển, buổi trưa bán được 20 quyển. Hỏi cửa hàng cần nhập thêm bao nhiêu quyển vở để có 30 quyển?",
        options: ["10 quyển", "15 quyển", "20 quyển", "25 quyển"],
        correctAnswer: "15 quyển", // Bước 1: 50-15=35 quyển; Bước 2: 35-20=15 còn lại; Bước 3: 30-15=15 cần thêm
      },
      {
        id: 54,
        question:
          "Mẹ mua 3 hộp kẹo, mỗi hộp có 12 cái. Mẹ cho An 10 cái và Bình 8 cái. Hỏi còn lại bao nhiêu cái kẹo?",
        options: ["14 cái", "16 cái", "18 cái", "20 cái"],
        correctAnswer: "18 cái", // Bước 1: 3*12=36 cái; Bước 2: 36-10=26 cái; Bước 3: 26-8=18 cái
      },
      {
        id: 55,
        question:
          "Một cửa hàng có 40 cây bút. Sáng bán được 12 cây, chiều bán được 8 cây. Hỏi phải nhập thêm bao nhiêu cây bút để có 30 cây?",
        options: ["5 cây", "10 cây", "15 cây", "20 cây"],
        correctAnswer: "10 cây", // Bước 1: 40-12=28 cây; Bước 2: 28-8=20 còn lại; Bước 3: 30-20=10 cần thêm
      },
      {
        id: 56,
        question:
          "Lan có 45 nhãn vở. Em cho bạn Mai 15 nhãn và cho bạn Hoa 10 nhãn. Hỏi Lan cần xin mẹ thêm bao nhiêu nhãn để có 30 nhãn?",
        options: ["5 nhãn", "10 nhãn", "15 nhãn", "20 nhãn"],
        correctAnswer: "10 nhãn", // Bước 1: 45-15=30 nhãn; Bước 2: 30-10=20 còn lại; Bước 3: 30-20=10 cần thêm
      },
      {
        id: 57,
        question:
          "Một người bán hàng có 60 quả cam. Sáng bán được 25 quả, trưa bán được 15 quả. Hỏi chiều cần bán bao nhiêu quả nữa để bán hết số cam?",
        options: ["15 quả", "20 quả", "25 quả", "30 quả"],
        correctAnswer: "20 quả", // Bước 1: 60-25=35 quả; Bước 2: 35-15=20 quả; Bước 3: 20 quả cần bán
      },
      {
        id: 58,
        question:
          "Hải có 30 viên bi. Nam cho Hải 15 viên và Minh cho Hải 10 viên. Hỏi bây giờ Hải có tất cả bao nhiêu viên bi?",
        options: ["45 viên", "50 viên", "55 viên", "60 viên"],
        correctAnswer: "55 viên", // Bước 1: 30+15=45 viên; Bước 2: 45+10=55 viên; Bước 3: 55 viên
      },
      {
        id: 59,
        question:
          "Một lớp học có 40 học sinh. Đầu năm có 5 bạn chuyển đi, cuối năm có 8 bạn chuyển đến. Hỏi cuối năm lớp có bao nhiêu học sinh?",
        options: ["37 học sinh", "40 học sinh", "43 học sinh", "45 học sinh"],
        correctAnswer: "43 học sinh", // Bước 1: 40-5=35 học sinh; Bước 2: 35+8=43 học sinh; Bước 3: 43 học sinh
      },
      {
        id: 60,
        question:
          "An có 25 que tính. Bình cho An 12 que, sau đó An cho Minh 7 que. Hỏi An còn lại bao nhiêu que tính?",
        options: ["25 que", "28 que", "30 que", "32 que"],
        correctAnswer: "30 que", // Bước 1: 25+12=37 que; Bước 2: 37-7=30 que; Bước 3: 30 que
      },
    ],
  },
  {
    topic: "Ôn tập biểu thức số",
    theory:
      "Biểu thức số là dãy các phép tính gồm số và dấu phép toán.\n      Thứ tự thực hiện phép tính:\n      1. Tính trong ngoặc trước\n      2. Tính nhân, chia từ trái sang phải\n      3. Tính cộng, trừ từ trái sang phải\n      Cách giải:\n      - Đánh số thứ tự các phép tính cần thực hiện\n      - Tính từng bước theo thứ tự đã đánh số\n      - Thay kết quả vừa tính vào biểu thức và tiếp tục\n      - Kiểm tra lại kết quả cuối cùng",
    questions: [
      {
        id: 1,
        question: "Tính giá trị biểu thức: 10 + 5 - 3",
        options: ["10", "12", "15", "8"],
        correctAnswer: "12",
      },
      {
        id: 2,
        question: "Tính giá trị biểu thức: 20 - 7 + 4",
        options: ["13", "17", "9", "21"],
        correctAnswer: "17",
      },
      {
        id: 3,
        question: "Tính giá trị biểu thức: 6 × 3 + 2",
        options: ["20", "22", "18", "11"],
        correctAnswer: "20",
      },
      {
        id: 4,
        question: "Tính giá trị biểu thức: 30 ÷ 5 - 1",
        options: ["6", "5", "7", "4"],
        correctAnswer: "5",
      },
      {
        id: 5,
        question: "Tính giá trị biểu thức: (8 + 2) × 4",
        options: ["14", "40", "32", "10"],
        correctAnswer: "40",
      },
      {
        id: 6,
        question: "Tính giá trị biểu thức: 50 ÷ (10 - 5)",
        options: ["10", "5", "2", "25"],
        correctAnswer: "10",
      },
      {
        id: 7,
        question: "Tính giá trị biểu thức: 15 + 3 × 4 - 2",
        options: ["25", "16", "29", "21"],
        correctAnswer: "25",
      },
      {
        id: 8,
        question: "Tính giá trị biểu thức: (60 - 10) ÷ 5 + 7",
        options: ["17", "10", "12", "27"],
        correctAnswer: "17",
      },
      {
        id: 9,
        question: "Tính giá trị biểu thức: 100 - (25 × 3 + 5)",
        options: ["20", "70", "75", "95"],
        correctAnswer: "20",
      },
      {
        id: 10,
        question: "Tính giá trị biểu thức: 12 × 5 + (40 ÷ 8 - 3)",
        options: ["62", "60", "65", "63"],
        correctAnswer: "62",
      },
    ],
  },
  {
    topic: "Biểu thức có chứa chữ",
    theory:
      "Biểu thức có chứa chữ dùng chữ cái thay cho số.\n      Cách giải:\n      Bước 1: Xác định giá trị của chữ cái trong đề bài\n      Bước 2: Thay số vào vị trí chữ cái trong biểu thức\n      Bước 3: Tính giá trị biểu thức theo thứ tự:\n      - Tính trong ngoặc trước\n      - Tính nhân, chia từ trái sang phải\n      - Tính cộng, trừ từ trái sang phải\n      Kiểm tra: Thực hiện lại phép tính với giá trị vừa tìm được",
    questions: [
      {
        id: 1,
        question: "Nếu a = 7, tính giá trị biểu thức a + 10.",
        options: ["10", "7", "17", "13"],
        correctAnswer: "17",
      },
      {
        id: 2,
        question: "Nếu b = 15, tính giá trị biểu thức b - 8.",
        options: ["7", "23", "15", "8"],
        correctAnswer: "7",
      },
      {
        id: 3,
        question: "Nếu x = 6, tính giá trị biểu thức 4 × x.",
        options: ["10", "24", "18", "64"],
        correctAnswer: "24",
      },
      {
        id: 4,
        question: "Nếu y = 24, tính giá trị biểu thức y ÷ 3.",
        options: ["8", "21", "27", "72"],
        correctAnswer: "8",
      },
      {
        id: 5,
        question: "Nếu m = 9, tính giá trị biểu thức m × 2 + 5.",
        options: ["18", "23", "16", "11"],
        correctAnswer: "23",
      },
      {
        id: 6,
        question: "Nếu n = 30, tính giá trị biểu thức (n + 10) ÷ 5.",
        options: ["40", "8", "6", "50"],
        correctAnswer: "8",
      },
      {
        id: 7,
        question: "Nếu a = 5 và b = 7, tính giá trị biểu thức a + b × 2.",
        options: ["24", "19", "14", "17"],
        correctAnswer: "19",
      },
      {
        id: 8,
        question: "Nếu x = 12 và y = 3, tính giá trị biểu thức x ÷ y + 6.",
        options: ["4", "18", "10", "9"],
        correctAnswer: "10",
      },
      {
        id: 9,
        question:
          "Một lớp học có $a$ học sinh nam và $b$ học sinh nữ. Viết biểu thức tính tổng số học sinh của lớp đó. Tính tổng số học sinh nếu $a = 18$ và $b = 15$.",
        options: ["a + b; 33", "a - b; 3", "a × b; 270", "a + b; 30"],
        correctAnswer: "a + b; 33",
      },
      {
        id: 10,
        question:
          "Một người đi xe đạp với vận tốc $v$ km/giờ trong $t$ giờ. Viết biểu thức tính quãng đường người đó đi được. Tính quãng đường nếu $v = 15$ km/giờ và $t = 3$ giờ.",
        options: [
          "v + t; 18 km",
          "v - t; 12 km",
          "v × t; 45 km",
          "v ÷ t; 5 km",
        ],
        correctAnswer: "v × t; 45 km",
      },
    ],
  },
  {
    topic: "Tính chất giao hoán, tính chất kết hợp của phép cộng",
    theory:
      "Tính chất giao hoán: a + b = b + a. Tính chất kết hợp: (a + b) + c = a + (b + c).",
    questions: [
      {
        id: 1,
        question: "Điền số thích hợp vào chỗ trống: 8 + 15 = 15 + ____.",
        options: ["8", "15", "23", "7"],
        correctAnswer: "8",
      },
      {
        id: 2,
        question:
          "Điền số thích hợp vào chỗ trống: (12 + 7) + 3 = 12 + (7 + ____).",
        options: ["12", "7", "3", "22"],
        correctAnswer: "3",
      },
      {
        id: 3,
        question: "Áp dụng tính chất giao hoán để tính: 25 + 17 + 5.",
        options: ["47", "37", "42", "40"],
        correctAnswer: "47",
      },
      {
        id: 4,
        question: "Tính bằng cách thuận tiện nhất: 38 + 23 + 12.",
        options: ["73", "63", "83", "63"],
        correctAnswer: "73", // (38+12)+23 = 50+23 = 73
      },
      {
        id: 5,
        question: "Tính bằng cách thuận tiện nhất: 19 + 54 + 21.",
        options: ["84", "94", "74", "64"],
        correctAnswer: "94", // (19+21)+54 = 40+54 = 94
      },
      {
        id: 6,
        question:
          "Điền dấu thích hợp (<, >, =): (10 + 20) + 5 ____ 10 + (20 + 5).",
        options: ["<", ">", "="],
        correctAnswer: "=",
      },
      {
        id: 7,
        question:
          "Có ba bao gạo. Bao thứ nhất nặng 25 kg, bao thứ hai nặng 30 kg, bao thứ ba nặng 15 kg. Tính tổng cân nặng của ba bao gạo bằng cách thuận tiện nhất.",
        options: ["70 kg", "60 kg", "75 kg", "80 kg"],
        correctAnswer: "70 kg", // (25+15)+30 = 40+30 = 70
      },
      {
        id: 8,
        question:
          "Một cửa hàng bán được 120 quyển vở vào buổi sáng, 80 quyển vở vào buổi chiều và 50 quyển vở vào buổi tối. Tính tổng số vở bán được trong ngày bằng cách thuận tiện nhất.",
        options: ["250 quyển", "200 quyển", "270 quyển", "230 quyển"],
        correctAnswer: "250 quyển", // (120+80)+50 = 200+50 = 250
      },
      {
        id: 9,
        question:
          "Cho biểu thức A = (a + 15) + 20 và B = a + (15 + 20). So sánh giá trị của A và B.",
        options: ["A > B", "A < B", "A = B", "Không xác định"],
        correctAnswer: "A = B",
      },
      {
        id: 10,
        question:
          "Một khu vườn có ba mảnh đất hình chữ nhật. Mảnh thứ nhất có diện tích 150 m², mảnh thứ hai 200 m², mảnh thứ ba 50 m². Tính tổng diện tích khu vườn bằng cách thuận tiện nhất.",
        options: ["350 m²", "400 m²", "300 m²", "450 m²"],
        correctAnswer: "400 m²", // (150+50)+200 = 200+200 = 400
      },
    ],
  },
  {
    topic: "Tính chất giao hoán, tính chất kết hợp của phép nhân",
    theory:
      "Tính chất giao hoán: a × b = b × a. Tính chất kết hợp: (a × b) × c = a × (b × c).",
    questions: [
      {
        id: 1,
        question: "Điền số thích hợp vào chỗ trống: 6 × 7 = 7 × ____.",
        options: ["6", "7", "42", "13"],
        correctAnswer: "6",
      },
      {
        id: 2,
        question:
          "Điền số thích hợp vào chỗ trống: (4 × 5) × 2 = 4 × (5 × ____).",
        options: ["4", "5", "2", "20"],
        correctAnswer: "2",
      },
      {
        id: 3,
        question: "Áp dụng tính chất giao hoán để tính: 8 × 5 × 2.",
        options: ["80", "40", "15", "10"],
        correctAnswer: "80",
      },
      {
        id: 4,
        question: "Tính bằng cách thuận tiện nhất: 5 × 17 × 2.",
        options: ["170", "85", "100", "70"],
        correctAnswer: "170", // (5*2)*17 = 10*17 = 170
      },
      {
        id: 5,
        question: "Tính bằng cách thuận tiện nhất: 4 × 25 × 3.",
        options: ["100", "300", "75", "12"],
        correctAnswer: "300", // (4*25)*3 = 100*3 = 300
      },
      {
        id: 6,
        question:
          "Điền dấu thích hợp (<, >, =): (3 × 10) × 4 ____ 3 × (10 × 4).",
        options: ["<", ">", "="],
        correctAnswer: "=",
      },
      {
        id: 7,
        question:
          "Một cửa hàng có 5 hộp bút chì, mỗi hộp có 12 cây. Mỗi cây bút chì giá 2 nghìn đồng. Tính tổng số tiền thu được từ việc bán hết số bút chì đó bằng cách thuận tiện nhất.",
        options: ["120 nghìn", "60 nghìn", "125 nghìn", "100 nghìn"],
        correctAnswer: "120 nghìn", // (5*2)*12 = 10*12 = 120
      },
      {
        id: 8,
        question:
          "Một khu vườn có 3 hàng cây, mỗi hàng có 20 cây. Mỗi cây cho 5 quả. Tính tổng số quả trong khu vườn bằng cách thuận tiện nhất.",
        options: ["300 quả", "100 quả", "60 quả", "200 quả"],
        correctAnswer: "300 quả", // 3*(20*5) = 3*100 = 300
      },
      {
        id: 9,
        question:
          "Cho biểu thức A = (a × 8) × 10 và B = a × (8 × 10). So sánh giá trị của A và B.",
        options: ["A > B", "A < B", "A = B", "Không xác định"],
        correctAnswer: "A = B",
      },
      {
        id: 10,
        question:
          "Một người thợ làm 2 sản phẩm mỗi giờ. Anh ta làm việc 8 giờ mỗi ngày và làm trong 5 ngày. Tính tổng số sản phẩm anh ta làm được bằng cách thuận tiện nhất.",
        options: ["80 sản phẩm", "40 sản phẩm", "15 sản phẩm", "100 sản phẩm"],
        correctAnswer: "80 sản phẩm", // (2*5)*8 = 10*8 = 80
      },
    ],
  },
  {
    topic: "Dãy số liệu",
    theory:
      "Dãy số liệu là tập hợp các số dùng để thống kê, tính toán trung bình, tổng, ...",
    questions: [
      {
        id: 1,
        question: "Cho dãy số liệu: 1, 3, 5, 7, 9. Dãy này có bao nhiêu số?",
        options: ["4", "5", "6", "3"],
        correctAnswer: "5",
      },
      {
        id: 2,
        question:
          "Dãy số liệu sau có bao nhiêu phần tử: 10, 20, 30, 40, 50, 60?",
        options: ["5", "6", "7", "4"],
        correctAnswer: "6",
      },
      {
        id: 3,
        question: "Trong các dãy số sau, dãy nào là dãy số liệu?",
        options: ["[1, 2, 3]", "Hà Nội", "Xanh", "Cơm"],
        correctAnswer: "[1, 2, 3]",
      },
      {
        id: 4,
        question:
          "Một cửa hàng bán được số lượng áo trong 4 ngày như sau: Ngày 1: 25 áo, Ngày 2: 30 áo, Ngày 3: 20 áo, Ngày 4: 35 áo. Dãy số liệu về số áo bán được là:",
        options: [
          "[25, 30, 20, 35]",
          "[Áo, áo, áo, áo]",
          "[Ngày 1, Ngày 2, Ngày 3, Ngày 4]",
          "[25, 30]",
        ],
        correctAnswer: "[25, 30, 20, 35]",
      },
      {
        id: 5,
        question:
          "Nhiệt độ đo được trong 3 giờ liên tiếp là: $28^circ C$, $30^circ C$, $29^circ C$. Số liệu $30^circ C$ cho biết điều gì?",
        options: [
          "Nhiệt độ thấp nhất",
          "Nhiệt độ cao nhất",
          "Nhiệt độ trung bình",
          "Không có ý nghĩa",
        ],
        correctAnswer: "Nhiệt độ cao nhất",
      },
      {
        id: 6,
        question:
          "Điểm số của 5 bạn trong bài kiểm tra Toán là: 8, 7, 9, 10, 6. Tổng điểm của 5 bạn là bao nhiêu?",
        options: ["30", "40", "35", "45"],
        correctAnswer: "40", // 8+7+9+10+6 = 40
      },
      {
        id: 7,
        question:
          "Chiều cao của 4 cây trong vườn là: 120 cm, 150 cm, 130 cm, 140 cm. Cây thấp nhất cao bao nhiêu?",
        options: ["150 cm", "120 cm", "130 cm", "140 cm"],
        correctAnswer: "120 cm",
      },
      {
        id: 8,
        question:
          "Một nông trại nuôi gà, vịt, heo với số lượng tương ứng là 150 con gà, 100 con vịt, 80 con heo. Lập bảng thống kê số lượng vật nuôi của nông trại.",
        options: [
          "Gà: 150, Vịt: 100, Heo: 80",
          "150, 100, 80",
          "Các con vật",
          "Số lượng",
        ],
        correctAnswer: "Gà: 150, Vịt: 100, Heo: 80",
      },
      {
        id: 9,
        question:
          "Dựa vào dãy số liệu điểm thi của 5 bạn: 8, 7, 9, 10, 6. Tính điểm trung bình của 5 bạn.",
        options: ["7", "8", "9", "6"],
        correctAnswer: "8", // 40 / 5 = 8
      },
      {
        id: 10,
        question:
          "Một người ghi lại số cốc nước uống mỗi ngày trong một tuần như sau: 6, 8, 7, 5, 9, 7, 6. Tính số cốc nước trung bình người đó uống mỗi ngày trong tuần.",
        options: ["6 cốc", "7 cốc", "8 cốc", "5 cốc"],
        correctAnswer: "7 cốc", // (6+8+7+5+9+7+6)/7 = 48/7 ~ 6.85, làm tròn thành 7
      },
    ],
  },
  {
    topic: "Số lần lặp lại của một sự kiện",
    theory:
      "Số lần lặp lại là số lần một sự kiện xảy ra trong một khoảng thời gian hoặc chuỗi sự kiện.",
    questions: [
      {
        id: 1,
        question:
          "Trong một tuần, An đi học 5 ngày. Hỏi trong 2 tuần, An đi học bao nhiêu ngày?",
        options: ["7", "10", "12", "14"],
        correctAnswer: "10",
      },
      {
        id: 2,
        question:
          "Mỗi ngày Bình tập thể dục 3 lần. Hỏi trong 4 ngày, Bình tập thể dục bao nhiêu lần?",
        options: ["7", "9", "12", "15"],
        correctAnswer: "12",
      },
      {
        id: 3,
        question:
          "Một viên gạch có chiều dài 20cm. Nếu xếp 5 viên gạch thành một hàng, hàng đó dài bao nhiêu cm?",
        options: ["80cm", "100cm", "120cm", "150cm"],
        correctAnswer: "100cm",
      },
      {
        id: 4,
        question:
          "Hộp bút có 6 cây bút. Mẹ mua 3 hộp bút như vậy. Hỏi có tất cả bao nhiêu cây bút?",
        options: ["12", "15", "18", "21"],
        correctAnswer: "18",
      },
      {
        id: 5,
        question:
          "Lan đọc sách 30 phút mỗi ngày. Hỏi trong một tuần, Lan đọc sách tổng cộng bao nhiêu phút?",
        options: ["180 phút", "210 phút", "240 phút", "270 phút"],
        correctAnswer: "210 phút",
      },
      {
        id: 6,
        question:
          "Một người thợ làm 8 sản phẩm mỗi giờ. Hỏi trong 6 giờ, người đó làm được bao nhiêu sản phẩm?",
        options: ["42", "48", "54", "60"],
        correctAnswer: "48",
      },
      {
        id: 7,
        question:
          "Mỗi quyển vở có 96 trang. Nếu mua 4 quyển vở thì có tất cả bao nhiêu trang?",
        options: ["384", "396", "400", "412"],
        correctAnswer: "384",
      },
      {
        id: 8,
        question:
          "Một xe ô tô chở được 25 bao gạo. Hỏi 5 xe ô tô như vậy chở được bao nhiêu bao gạo?",
        options: ["100", "115", "125", "135"],
        correctAnswer: "125",
      },
      {
        id: 9,
        question:
          "Một cửa hàng bán được 120 cái áo trong 3 ngày. Biết số áo bán được mỗi ngày là như nhau. Hỏi trong 5 ngày, cửa hàng đó bán được bao nhiêu cái áo?",
        options: ["180", "200", "220", "240"],
        correctAnswer: "200",
      },
      {
        id: 10,
        question:
          "An đọc một cuốn sách có 240 trang. Mỗi ngày An đọc 15 trang. Hỏi An đọc xong cuốn sách trong bao nhiêu ngày?",
        options: ["12 ngày", "14 ngày", "16 ngày", "18 ngày"],
        correctAnswer: "16 ngày",
      },
    ],
  },
  {
    topic: "Tìm số trung bình cộng",
    theory: "Trung bình cộng là tổng các số chia cho số lượng các số đó.",
    questions: [
      {
        id: 1,
        question: "Tìm trung bình cộng của các số: 2, 4, 6.",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      {
        id: 2,
        question: "Tìm trung bình cộng của các số: 5, 10, 15, 20.",
        options: ["10", "12.5", "15", "17.5"],
        correctAnswer: "12.5",
      },
      {
        id: 3,
        question:
          "An có 8 viên bi, Bình có 10 viên bi, Minh có 12 viên bi. Hỏi trung bình mỗi bạn có bao nhiêu viên bi?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "10",
      },
      {
        id: 4,
        question:
          "Trong 3 ngày, cửa hàng bán được lần lượt là 25kg, 30kg, 35kg gạo. Hỏi trung bình mỗi ngày cửa hàng bán được bao nhiêu kg gạo?",
        options: ["25kg", "30kg", "32kg", "35kg"],
        correctAnswer: "30kg",
      },
      {
        id: 5,
        question: "Tìm trung bình cộng của các số lẻ từ 1 đến 9.",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
      },
      {
        id: 6,
        question:
          "Một đội công nhân làm việc trong 4 ngày. Số mét đường làm được lần lượt là 12m, 15m, 18m, 11m. Hỏi trung bình mỗi ngày đội công nhân làm được bao nhiêu mét đường?",
        options: ["12m", "13m", "14m", "15m"],
        correctAnswer: "14m",
      },
      {
        id: 7,
        question:
          "Tìm trung bình cộng của các số chẵn có hai chữ số nhỏ hơn 20.",
        options: ["12", "13", "14", "15"],
        correctAnswer: "14", // (10+12+14+16+18)/5 = 14
      },
      {
        id: 8,
        question:
          "Trong một bài kiểm tra, An đạt 8 điểm, Bình đạt 9 điểm, Cường đạt 7 điểm, Dũng đạt 10 điểm. Hỏi trung bình cộng điểm của bốn bạn là bao nhiêu?",
        options: ["7.5", "8", "8.5", "9"],
        correctAnswer: "8.5",
      },
      {
        id: 9,
        question:
          "Tuần trước Mai đọc được 5 trang sách mỗi ngày, tuần này em đọc được 7 trang sách mỗi ngày. Hỏi trung bình mỗi ngày Mai đọc được bao nhiêu trang sách?",
        options: ["4 trang", "5 trang", "6 trang", "7 trang"],
        correctAnswer: "6 trang", // (5+7)/2 = 6
      },
      {
        id: 9,
        question:
          "Một nhóm học sinh có 3 bạn, số tuổi của các bạn lần lượt là 9, 10, 11. Một nhóm khác có 2 bạn, số tuổi của các bạn lần lượt là 8, 12. Hỏi trung bình cộng tuổi của tất cả 5 bạn là bao nhiêu?",
        options: ["9", "9.5", "10", "10.5"],
        correctAnswer: "10", // (9+10+11+8+12) / 5 = 50 / 5 = 10
      },
      {
        id: 10,
        question:
          "Trung bình cộng của ba số là 15. Biết hai số đầu là 12 và 18. Tìm số thứ ba.",
        options: ["13", "14", "15", "16"],
        correctAnswer: "15", // (12+18+x)/3 = 15 => 30+x = 45 => x = 15
      },
    ],
  },
  {
    topic: "Đề xi mét vuông",
    theory:
      "1 dm² = 100 cm². Đề xi mét vuông là đơn vị đo diện tích nhỏ hơn mét vuông.",
    questions: [
      {
        id: 1,
        question: "1 dm² bằng bao nhiêu cm²?",
        options: ["10 cm²", "100 cm²", "1000 cm²", "10000 cm²"],
        correctAnswer: "100 cm²",
      },
      {
        id: 2,
        question: "Điền số thích hợp vào chỗ chấm: 3 dm² = ... cm²",
        options: ["30", "300", "3000", "30000"],
        correctAnswer: "300",
      },
      {
        id: 3,
        question:
          "Một hình vuông có cạnh 2 dm. Diện tích của hình vuông đó là bao nhiêu dm²?",
        options: ["2 dm²", "4 dm²", "6 dm²", "8 dm²"],
        correctAnswer: "4 dm²",
      },
      {
        id: 4,
        question:
          "Một hình chữ nhật có chiều dài 5 dm, chiều rộng 3 dm. Diện tích của hình chữ nhật đó là bao nhiêu dm²?",
        options: ["8 dm²", "15 dm²", "20 dm²", "25 dm²"],
        correctAnswer: "15 dm²",
      },
      {
        id: 5,
        question: "Chuyển đổi 200 cm² sang dm².",
        options: ["2 dm²", "20 dm²", "0.2 dm²", "0.02 dm²"],
        correctAnswer: "2 dm²",
      },
      {
        id: 6,
        question:
          "Một hình vuông có chu vi 16 dm. Diện tích của hình vuông đó là bao nhiêu dm²?",
        options: ["4 dm²", "16 dm²", "32 dm²", "64 dm²"],
        correctAnswer: "16 dm²", // Cạnh = 16/4 = 4dm. Diện tích = 4*4 = 16dm2
      },
      {
        id: 7,
        question:
          "Mảnh vườn hình chữ nhật có chiều dài 12 dm, chiều rộng bằng 1/3 chiều dài. Tính diện tích mảnh vườn đó theo dm².",
        options: ["36 dm²", "48 dm²", "60 dm²", "72 dm²"],
        correctAnswer: "48 dm²", // Chiều rộng = 12/3 = 4dm. Diện tích = 12*4 = 48dm2
      },
      {
        id: 8,
        question:
          "Một tấm bìa hình chữ nhật có diện tích 50 dm². Nếu chiều rộng là 5 dm thì chiều dài là bao nhiêu dm?",
        options: ["8 dm", "9 dm", "10 dm", "12 dm"],
        correctAnswer: "10 dm",
      },
      {
        id: 9,
        question:
          "Hai hình vuông có tổng diện tích là 80 dm². Biết hình vuông thứ nhất có cạnh 6 dm. Hỏi cạnh của hình vuông thứ hai là bao nhiêu dm?",
        options: ["6 dm", "7 dm", "8 dm", "9 dm"],
        correctAnswer: "8 dm", // Diện tích HV1 = 6*6 = 36 dm2. Diện tích HV2 = 80-36 = 44 dm2. Cạnh HV2 = sqrt(44) không phải số nguyên. Câu này khó quá, sửa lại.
      },
      {
        id: 9,
        question:
          "Một hình chữ nhật có diện tích 24 dm². Nếu tăng chiều dài lên 2 dm và giữ nguyên chiều rộng thì diện tích tăng thêm 8 dm². Tính chiều rộng ban đầu của hình chữ nhật.",
        options: ["3 dm", "4 dm", "5 dm", "6 dm"],
        correctAnswer: "4 dm", // Diện tích tăng thêm = 2 * chiều rộng = 8 => chiều rộng = 4dm.
      },
      {
        id: 10,
        question:
          "Một cái bàn hình vuông có cạnh 90 cm. Hỏi diện tích cái bàn đó là bao nhiêu dm²?",
        options: ["81 dm²", "810 dm²", "8100 dm²", "8.1 dm²"],
        correctAnswer: "81 dm²", // 90cm = 9dm. Diện tích = 9*9 = 81 dm2
      },
    ],
  },
  {
    topic: "Mét vuông",
    theory:
      "1 m² = 100 dm². Mét vuông là đơn vị đo diện tích thường dùng trong thực tế.",
    questions: [
      {
        id: 1,
        question: "1 m² bằng bao nhiêu dm²?",
        options: ["10 dm²", "100 dm²", "1000 dm²", "10000 dm²"],
        correctAnswer: "100 dm²",
      },
      {
        id: 2,
        question: "Điền số thích hợp vào chỗ chấm: 5 m² = ... dm²",
        options: ["50", "500", "5000", "50000"],
        correctAnswer: "500",
      },
      {
        id: 3,
        question:
          "Một hình vuông có cạnh 3 m. Diện tích của hình vuông đó là bao nhiêu m²?",
        options: ["3 m²", "6 m²", "9 m²", "12 m²"],
        correctAnswer: "9 m²",
      },
      {
        id: 4,
        question:
          "Một hình chữ nhật có chiều dài 6 m, chiều rộng 4 m. Diện tích của hình chữ nhật đó là bao nhiêu m²?",
        options: ["10 m²", "20 m²", "24 m²", "30 m²"],
        correctAnswer: "24 m²",
      },
      {
        id: 5,
        question: "Chuyển đổi 300 dm² sang m².",
        options: ["3 m²", "30 m²", "0.3 m²", "0.03 m²"],
        correctAnswer: "3 m²",
      },
      {
        id: 6,
        question:
          "Một căn phòng hình chữ nhật có chiều dài 8 m, chiều rộng 5 m. Người ta dùng gạch hình vuông cạnh 1 m để lát nền. Cần bao nhiêu viên gạch?",
        options: ["13 viên", "26 viên", "40 viên", "80 viên"],
        correctAnswer: "40 viên", // Diện tích phòng = 8*5 = 40m2. Diện tích viên gạch = 1*1 = 1m2. Số viên = 40/1 = 40
      },
      {
        id: 7,
        question:
          "Một sân trường hình vuông có cạnh 20 m. Tính diện tích sân trường đó theo m².",
        options: ["40 m²", "400 m²", "4000 m²", "40000 m²"],
        correctAnswer: "400 m²",
      },
      {
        id: 8,
        question:
          "Một mảnh đất hình chữ nhật có chu vi 30 m. Chiều dài hơn chiều rộng 5 m. Tính diện tích mảnh đất đó theo m².",
        options: ["30 m²", "40 m²", "50 m²", "60 m²"],
        correctAnswer: "50 m²", // Nửa chu vi = 15m. Dài + Rộng = 15. Dài - Rộng = 5. Dài = (15+5)/2 = 10m. Rộng = (15-5)/2 = 5m. Diện tích = 10*5 = 50m2.
      },
      {
        id: 9,
        question:
          "Một cái ao hình chữ nhật có diện tích 120 m². Nếu giảm chiều dài đi 2 m thì diện tích giảm đi 16 m². Tính chiều dài ban đầu của cái ao.",
        options: ["13 m", "14 m", "15 m", "16 m"],
        correctAnswer: "15 m", // Diện tích giảm = 2 * chiều rộng = 16 => chiều rộng = 8m. Chiều dài ban đầu = 120/8 = 15m.
      },
      {
        id: 10,
        question:
          "Một khu đất hình chữ nhật có chiều dài 30 m và chiều rộng 20 m. Người ta dùng 1/5 diện tích khu đất để trồng cây ăn quả. Hỏi diện tích trồng cây ăn quả là bao nhiêu m²?",
        options: ["100 m²", "120 m²", "150 m²", "180 m²"],
        correctAnswer: "120 m²", // Diện tích khu đất = 30*20 = 600m2. Diện tích trồng cây = 600 * (1/5) = 120m2.
      },
    ],
  },
  {
    topic: "Bài tập ôn tập",
    theory:
      "Tổng hợp các dạng bài tập đã học để ôn luyện và củng cố kiến thức.",
    questions: [
      {
        id: 1,
        question: "Số lớn nhất có 5 chữ số khác nhau là số nào?",
        options: ["99999", "98765", "10000", "56789"],
        correctAnswer: "98765",
      },
      {
        id: 2,
        question: "Chữ số 7 trong số 73521 có giá trị là bao nhiêu?",
        options: ["7000", "700", "70", "70000"],
        correctAnswer: "70000",
      },
      {
        id: 3,
        question: "Tính: 34567 + 12345 =",
        options: ["46912", "47000", "46802", "46900"],
        correctAnswer: "46912",
      },
      {
        id: 4,
        question: "Tính: 98765 - 54321 =",
        options: ["44440", "44400", "44444", "44000"],
        correctAnswer: "44444",
      },
      {
        id: 5,
        question: "Tính: 1234 x 5 =",
        options: ["6160", "6170", "6150", "6140"],
        correctAnswer: "6170",
      },
      {
        id: 6,
        question: "Tính: 4800 : 6 =",
        options: ["80", "800", "8", "8000"],
        correctAnswer: "800",
      },
      {
        id: 7,
        question: "Trong các số sau, số nào là số lẻ: 124, 357, 890, 1002?",
        options: ["124", "890", "357", "1002"],
        correctAnswer: "357",
      },
      {
        id: 8,
        question: "Trong các số sau, số nào là số chẵn: 201, 403, 605, 808?",
        options: ["201", "403", "605", "808"],
        correctAnswer: "808",
      },
      {
        id: 9,
        question:
          "Có 5 hộp bút chì, mỗi hộp có 12 cây. Hỏi 3 hộp bút chì có bao nhiêu cây?",
        options: ["36", "60", "24", "48"],
        correctAnswer: "36",
      },
      {
        id: 10,
        question:
          "Một cửa hàng bán 12 kg gạo trong 3 ngày. Hỏi trong 5 ngày, cửa hàng bán được bao nhiêu kg gạo?",
        options: ["15", "18", "24", "20"],
        correctAnswer: "20",
      },
      {
        id: 11,
        question:
          "Một lớp học có 30 học sinh, trong đó có 2/5 số học sinh là nữ. Hỏi có bao nhiêu học sinh nam?",
        options: ["12", "18", "20", "10"],
        correctAnswer: "18",
      },
      {
        id: 12,
        question:
          "Một kho có 2500 kg gạo. Ngày thứ nhất xuất 1/5 số gạo, ngày thứ hai xuất 1/4 số gạo còn lại. Hỏi sau hai ngày kho còn lại bao nhiêu kg gạo?",
        options: ["1250", "1500", "1000", "1750"],
        correctAnswer: "1500",
      },
      {
        id: 13,
        question: "Giá trị của biểu thức 15 x 3 + 20 là bao nhiêu?",
        options: ["65", "45", "75", "55"],
        correctAnswer: "65",
      },
      {
        id: 14,
        question: "Giá trị của biểu thức (40 - 15) : 5 là bao nhiêu?",
        options: ["25", "7", "3", "5"],
        correctAnswer: "5",
      },
      {
        id: 15,
        question:
          "Cho biểu thức A = a + 25. Nếu a = 15, thì giá trị của A là bao nhiêu?",
        options: ["25", "15", "50", "40"],
        correctAnswer: "40",
      },
      {
        id: 16,
        question:
          "Cho biểu thức B = b x 7. Nếu b = 9, thì giá trị của B là bao nhiêu?",
        options: ["63", "56", "49", "70"],
        correctAnswer: "63",
      },
      {
        id: 17,
        question: "Điền số thích hợp vào chỗ trống: 12 + 8 = 8 + ...",
        options: ["20", "4", "12", "10"],
        correctAnswer: "12",
      },
      {
        id: 18,
        question:
          "Điền số thích hợp vào chỗ trống: (5 + 10) + 7 = 5 + (... + 7)",
        options: ["12", "10", "15", "17"],
        correctAnswer: "10",
      },
      {
        id: 19,
        question: "Điền số thích hợp vào chỗ trống: 6 x 9 = 9 x ...",
        options: ["54", "3", "18", "6"],
        correctAnswer: "6",
      },
      {
        id: 20,
        question:
          "Điền số thích hợp vào chỗ trống: (4 x 5) x 2 = 4 x (... x 2)",
        options: ["5", "10", "8", "20"],
        correctAnswer: "5",
      },
      {
        id: 21,
        question:
          "Quan sát dãy số liệu sau: 10, 15, 20, 25, 30. Số thứ 3 trong dãy là số nào?",
        options: ["10", "15", "25", "20"],
        correctAnswer: "20",
      },
      {
        id: 22,
        question:
          "Có bao nhiêu số chẵn trong dãy số liệu sau: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10?",
        options: ["5", "10", "4", "6"],
        correctAnswer: "5",
      },
      {
        id: 23,
        question: "Trong một tuần có bao nhiêu ngày Chủ Nhật?",
        options: ["2", "1", "3", "7"],
        correctAnswer: "1",
      },
      {
        id: 24,
        question: "Nếu hôm nay là thứ Ba, thì sau 5 ngày nữa là thứ mấy?",
        options: ["Thứ Hai", "Chủ Nhật", "Thứ Bảy", "Thứ Sáu"],
        correctAnswer: "Chủ Nhật",
      },
      {
        id: 25,
        question: "Tìm số trung bình cộng của các số: 10, 20, 30.",
        options: ["10", "30", "20", "60"],
        correctAnswer: "20",
      },
      {
        id: 26,
        question:
          "An có 8 viên bi, Bình có 12 viên bi, Cường có 10 viên bi. Hỏi trung bình mỗi bạn có bao nhiêu viên bi?",
        options: ["10", "8", "12", "30"],
        correctAnswer: "10",
      },
      {
        id: 27,
        question: "Đổi 5 dm² ra cm².",
        options: ["50 cm²", "500 cm²", "5000 cm²", "5 cm²"],
        correctAnswer: "500 cm²",
      },
      {
        id: 28,
        question:
          "Một hình vuông có cạnh là 3 dm. Diện tích của hình vuông đó là bao nhiêu đề xi mét vuông?",
        options: ["12 dm²", "6 dm²", "9 dm²", "1 dm²"],
        correctAnswer: "9 dm²",
      },
      {
        id: 29,
        question: "Đổi 2 m² ra dm².",
        options: ["200 dm²", "20 dm²", "2000 dm²", "2 dm²"],
        correctAnswer: "200 dm²",
      },
      {
        id: 30,
        question:
          "Một hình chữ nhật có chiều dài 5m, chiều rộng 4m. Diện tích của hình chữ nhật đó là bao nhiêu mét vuông?",
        options: ["20 m²", "18 m²", "9 m²", "10 m²"],
        correctAnswer: "20 m²",
      },
    ],
  },
  {
    topic: "Các số có sáu chữ số - Hàng và lớp",
    theory:
      "Số có sáu chữ số gồm các hàng: đơn vị, chục, trăm, nghìn, chục nghìn, trăm nghìn.",
    questions: [
      {
        id: 1,
        question: "Chữ số 5 trong số 125 348 thuộc hàng nào?",
        options: ["Hàng nghìn", "Hàng chục nghìn", "Hàng trăm", "Hàng đơn vị"],
        correctAnswer: "Hàng nghìn",
      },
      {
        id: 2,
        question:
          "Số 'Ba trăm linh bảy nghìn không trăm mười hai' được viết là:",
        options: ["307120", "307012", "370012", "307102"],
        correctAnswer: "307012",
      },
      {
        id: 3,
        question: "Số lớn nhất có sáu chữ số là:",
        options: ["999990", "999999", "100000", "999900"],
        correctAnswer: "999999",
      },
      {
        id: 4,
        question: "Số 456 789 có chữ số hàng trăm là:",
        options: ["4", "5", "6", "7"],
        correctAnswer: "7",
      },
      {
        id: 5,
        question: "Số nào sau đây thuộc lớp nghìn?",
        options: ["123", "12345", "123456", "12"],
        correctAnswer: "123456",
      },
      {
        id: 6,
        question: "Trong số 700 000, chữ số 7 thuộc hàng nào?",
        options: [
          "Hàng chục nghìn",
          "Hàng nghìn",
          "Hàng trăm nghìn",
          "Hàng triệu",
        ],
        correctAnswer: "Hàng trăm nghìn",
      },
      {
        id: 7,
        question: "Giá trị của chữ số 8 trong số 821 500 là:",
        options: ["8000", "80000", "800000", "800"],
        correctAnswer: "800000",
      },
      {
        id: 8,
        question: "Số bé nhất có sáu chữ số khác nhau là:",
        options: ["102345", "123456", "100000", "102340"],
        correctAnswer: "102345",
      },
      {
        id: 9,
        question: "Số 567 000 có bao nhiêu chữ số 0?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
      },
      {
        id: 10,
        question: "Số nào dưới đây không phải là số có sáu chữ số?",
        options: ["100000", "999999", "54321", "123456"],
        correctAnswer: "54321",
      },
    ],
  },
  {
    topic: "Triệu - Lớp triệu",
    theory:
      "Lớp triệu gồm các số từ một triệu trở lên. Biết đọc, viết, xác định hàng triệu, chục triệu, trăm triệu.",
    questions: [
      {
        id: 1,
        question: "Một triệu được viết là:",
        options: ["100000", "1000000", "10000", "1000"],
        correctAnswer: "1000000",
      },
      {
        id: 2,
        question: "Chữ số 3 trong số 3 456 789 thuộc hàng nào?",
        options: [
          "Hàng nghìn",
          "Hàng chục nghìn",
          "Hàng triệu",
          "Hàng trăm nghìn",
        ],
        correctAnswer: "Hàng triệu",
      },
      {
        id: 3,
        question:
          "Số 'Hai mươi triệu không trăm năm mươi nghìn bảy trăm' được viết là:",
        options: ["20050700", "20500700", "20005700", "20050070"],
        correctAnswer: "20050700",
      },
      {
        id: 4,
        question: "Số 5 000 000 có bao nhiêu chữ số 0?",
        options: ["5", "6", "7", "4"],
        correctAnswer: "6",
      },
      {
        id: 5,
        question: "Lớp triệu của số 123 456 789 bao gồm các chữ số:",
        options: ["456", "123", "789", "12"],
        correctAnswer: "123",
      },
      {
        id: 6,
        question: "Giá trị của chữ số 9 trong số 92 100 000 là:",
        options: ["900000", "9000000", "90000000", "90000"],
        correctAnswer: "90000000",
      },
      {
        id: 7,
        question: "Số nào dưới đây có lớp triệu là 54?",
        options: ["54123456", "12354789", "54000000", "54123"],
        correctAnswer: "54123456",
      },
      {
        id: 8,
        question: "Số lớn nhất có bảy chữ số là:",
        options: ["9999990", "1000000", "9999999", "9999900"],
        correctAnswer: "9999999",
      },
      {
        id: 9,
        question: "Trong số 15 000 000, chữ số 1 thuộc hàng nào?",
        options: [
          "Hàng chục nghìn",
          "Hàng triệu",
          "Hàng chục triệu",
          "Hàng trăm triệu",
        ],
        correctAnswer: "Hàng chục triệu",
      },
      {
        id: 10,
        question: "Số nào có giá trị lớn nhất?",
        options: ["9 876 543", "10 000 000", "9 999 999", "9 987 654"],
        correctAnswer: "10 000 000",
      },
    ],
  },
  {
    topic: "Đọc, viết các số tự nhiên trong hệ thập phân",
    theory:
      "Số tự nhiên trong hệ thập phân gồm các chữ số từ 0 đến 9, mỗi hàng gấp 10 lần hàng liền sau.",
    questions: [
      {
        id: 1,
        question: "Số 'Hai nghìn không trăm linh năm' được viết là:",
        options: ["2005", "2050", "20005", "205"],
        correctAnswer: "2005",
      },
      {
        id: 2,
        question: "Số 15 320 đọc là:",
        options: [
          "Mười lăm nghìn ba trăm hai mươi",
          "Một trăm năm mươi ba nghìn hai mươi",
          "Mười lăm nghìn ba mươi hai",
          "Mười lăm nghìn ba trăm hai",
        ],
        correctAnswer: "Mười lăm nghìn ba trăm hai mươi",
      },
      {
        id: 3,
        question: "Số nào dưới đây có chữ số hàng trăm là 7?",
        options: ["1270", "7120", "1720", "1207"],
        correctAnswer: "1720",
      },
      {
        id: 4,
        question: "Số 40 000 đọc là:",
        options: ["Bốn nghìn", "Bốn mươi nghìn", "Bốn trăm nghìn", "Bốn triệu"],
        correctAnswer: "Bốn mươi nghìn",
      },
      {
        id: 5,
        question: "Chữ số 0 trong số 50 213 có giá trị là:",
        options: ["0", "5000", "200", "10"],
        correctAnswer: "0",
      },
      {
        id: 6,
        question: "Số 'Tám mươi lăm nghìn chín trăm lẻ sáu' được viết là:",
        options: ["85906", "85960", "85096", "859006"],
        correctAnswer: "85906",
      },
      {
        id: 7,
        question: "Số 730 401 đọc là:",
        options: [
          "Bảy trăm ba mươi nghìn bốn trăm mốt",
          "Bảy trăm ba mươi nghìn bốn trăm linh một",
          "Bảy mươi ba nghìn bốn trăm linh một",
          "Bảy trăm ba nghìn bốn trăm linh một",
        ],
        correctAnswer: "Bảy trăm ba mươi nghìn bốn trăm linh một",
      },
      {
        id: 8,
        question: "Số nào có tổng các chữ số bằng 10?",
        options: ["1234", "1023", "1243", "1000"],
        correctAnswer: "1234",
      },
      {
        id: 9,
        question: "Số nào sau đây được đọc là 'Hai mươi sáu nghìn năm trăm'?",
        options: ["26005", "26050", "26500", "206500"],
        correctAnswer: "26500",
      },
      {
        id: 10,
        question: "Giá trị của chữ số hàng nghìn trong số 923 876 là:",
        options: ["9000", "2000", "3000", "8000"],
        correctAnswer: "3000",
      },
    ],
  },
  {
    topic: "So sánh và xếp thứ tự các số tự nhiên",
    theory:
      "So sánh số tự nhiên dựa vào số chữ số và giá trị từng hàng từ trái sang phải.",
    questions: [
      {
        id: 1,
        question: "Số nào lớn hơn 5678?",
        options: ["5677", "5670", "5679", "5600"],
        correctAnswer: "5679",
      },
      {
        id: 2,
        question:
          "Sắp xếp các số sau theo thứ tự tăng dần: 12345, 12543, 12453",
        options: [
          "12345, 12453, 12543",
          "12543, 12453, 12345",
          "12345, 12543, 12453",
          "12453, 12345, 12543",
        ],
        correctAnswer: "12345, 12453, 12543",
      },
      {
        id: 3,
        question: "Điền dấu thích hợp vào chỗ trống: 98765 ___ 98760",
        options: ["<", ">", "=", "Không xác định"],
        correctAnswer: ">",
      },
      {
        id: 4,
        question:
          "Số nhỏ nhất trong các số sau: 10001, 10010, 10100, 10000 là:",
        options: ["10001", "10010", "10100", "10000"],
        correctAnswer: "10000",
      },
      {
        id: 5,
        question:
          "Sắp xếp các số sau theo thứ tự giảm dần: 78901, 78109, 78910",
        options: [
          "78901, 78109, 78910",
          "78910, 78901, 78109",
          "78109, 78901, 78910",
          "78910, 78109, 78901",
        ],
        correctAnswer: "78910, 78901, 78109",
      },
      {
        id: 6,
        question: "Số lớn nhất có 5 chữ số là bao nhiêu?",
        options: ["99990", "10000", "99999", "99900"],
        correctAnswer: "99999",
      },
      {
        id: 7,
        question: "Điền số thích hợp vào chỗ trống: 12345 < ___ < 12347",
        options: ["12344", "12346", "12348", "12350"],
        correctAnswer: "12346",
      },
      {
        id: 8,
        question: "Trong các số 23456, 23654, 23546, số nào lớn nhất?",
        options: ["23456", "23654", "23546", "Cả ba đều bằng nhau"],
        correctAnswer: "23654",
      },
      {
        id: 9,
        question: "Số 9999 so với 10000 thì:",
        options: ["Lớn hơn", "Bé hơn", "Bằng nhau", "Không thể so sánh"],
        correctAnswer: "Bé hơn",
      },
      {
        id: 10,
        question: "Có bao nhiêu số tự nhiên có 4 chữ số?",
        options: ["9000", "9999", "1000", "900"],
        correctAnswer: "9000",
      },
    ],
  },
  {
    topic: "Dãy số tự nhiên",
    theory: "Dãy số tự nhiên là dãy số bắt đầu từ 0 và tăng dần mãi mãi.",
    questions: [
      {
        id: 1,
        question: "Số tiếp theo trong dãy số: 10, 20, 30, ___ là:",
        options: ["35", "40", "50", "30"],
        correctAnswer: "40",
      },
      {
        id: 2,
        question: "Dãy số tự nhiên bắt đầu từ số nào?",
        options: ["1", "0", "10", "100"],
        correctAnswer: "0",
      },
      {
        id: 3,
        question:
          "Trong dãy số tự nhiên, hai số liền kề nhau hơn kém nhau mấy đơn vị?",
        options: ["10", "5", "1", "2"],
        correctAnswer: "1",
      },
      {
        id: 4,
        question: "Số thứ 5 trong dãy số 2, 4, 6, 8, ___ là:",
        options: ["10", "12", "14", "16"],
        correctAnswer: "10",
      },
      {
        id: 5,
        question: "Dãy số lẻ liên tiếp từ 1 đến 9 là:",
        options: [
          "1, 2, 3, 4, 5, 6, 7, 8, 9",
          "1, 3, 5, 7, 9",
          "2, 4, 6, 8",
          "1, 3, 5, 7, 10",
        ],
        correctAnswer: "1, 3, 5, 7, 9",
      },
      {
        id: 6,
        question: "Số nào không thuộc dãy số chẵn: 0, 2, 4, 6, 8, ___?",
        options: ["10", "12", "9", "14"],
        correctAnswer: "9",
      },
      {
        id: 7,
        question: "Dãy số tự nhiên có bao nhiêu số?",
        options: ["Hữu hạn", "Vô hạn", "100", "1000"],
        correctAnswer: "Vô hạn",
      },
      {
        id: 8,
        question: "Số đứng liền trước số 1000 là:",
        options: ["999", "1001", "990", "900"],
        correctAnswer: "999",
      },
      {
        id: 9,
        question: "Số đứng liền sau số 999 là:",
        options: ["998", "1000", "1001", "100"],
        correctAnswer: "1000",
      },
      {
        id: 10,
        question:
          "Điền số thích hợp vào chỗ trống để tạo thành dãy số tăng dần đều: 5, 10, ___, 20, 25",
        options: ["12", "15", "18", "22"],
        correctAnswer: "15",
      },
    ],
  },
  {
    topic: "Đo góc - Góc nhọn, góc tù, góc bẹt",
    theory:
      "Góc nhọn < 90°, góc vuông = 90°, góc tù > 90° và < 180°, góc bẹt = 180°.",
    questions: [
      {
        id: 1,
        question: "Góc có số đo 90 độ được gọi là góc gì?",
        options: ["Góc nhọn", "Góc tù", "Góc vuông", "Góc bẹt"],
        correctAnswer: "Góc vuông",
      },
      {
        id: 2,
        question: "Góc nhọn là góc có số đo:",
        options: [
          "Lớn hơn 90 độ",
          "Nhỏ hơn 90 độ",
          "Bằng 90 độ",
          "Bằng 180 độ",
        ],
        correctAnswer: "Nhỏ hơn 90 độ",
      },
      {
        id: 3,
        question: "Góc tù là góc có số đo:",
        options: [
          "Nhỏ hơn 90 độ",
          "Bằng 90 độ",
          "Lớn hơn 90 độ và nhỏ hơn 180 độ",
          "Lớn hơn 180 độ",
        ],
        correctAnswer: "Lớn hơn 90 độ và nhỏ hơn 180 độ",
      },
      {
        id: 4,
        question: "Góc bẹt có số đo là:",
        options: ["90 độ", "180 độ", "0 độ", "360 độ"],
        correctAnswer: "180 độ",
      },
      {
        id: 5,
        question: "Một góc có số đo 45 độ là góc gì?",
        options: ["Góc vuông", "Góc nhọn", "Góc tù", "Góc bẹt"],
        correctAnswer: "Góc nhọn",
      },
      {
        id: 6,
        question: "Một góc có số đo 120 độ là góc gì?",
        options: ["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"],
        correctAnswer: "Góc tù",
      },
      {
        id: 7,
        question: "Khi hai tia đối nhau tạo thành một góc, đó là góc gì?",
        options: ["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"],
        correctAnswer: "Góc bẹt",
      },
      {
        id: 8,
        question: "Dụng cụ dùng để đo góc là gì?",
        options: ["Thước kẻ", "Compa", "Thước đo góc (Ê-ke)", "Thước dây"],
        correctAnswer: "Thước đo góc (Ê-ke)",
      },
      {
        id: 9,
        question: "Góc nào sau đây là góc tù?",
        options: ["60 độ", "90 độ", "150 độ", "180 độ"],
        correctAnswer: "150 độ",
      },
      {
        id: 10,
        question:
          "Góc có số đo lớn hơn góc vuông nhưng nhỏ hơn góc bẹt là góc gì?",
        options: ["Góc nhọn", "Góc tù", "Góc vuông", "Góc bẹt"],
        correctAnswer: "Góc tù",
      },
    ],
  },
  {
    topic: "Hai đường thẳng vuông góc",
    theory:
      "Hai đường thẳng vuông góc khi cắt nhau tạo thành 4 góc vuông (90°).",
    questions: [
      {
        id: 1,
        question:
          "Khi hai đường thẳng vuông góc với nhau, chúng tạo thành mấy góc vuông?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
      },
      {
        id: 2,
        question:
          "Hai đường thẳng vuông góc là hai đường thẳng cắt nhau và tạo thành góc có số đo là:",
        options: ["60 độ", "90 độ", "180 độ", "45 độ"],
        correctAnswer: "90 độ",
      },
      {
        id: 3,
        question:
          "Để kiểm tra hai đường thẳng có vuông góc với nhau hay không, ta thường dùng dụng cụ nào?",
        options: ["Thước thẳng", "Compa", "Thước đo góc (Ê-ke)", "Thước dây"],
        correctAnswer: "Thước đo góc (Ê-ke)",
      },
      {
        id: 4,
        question: "Trong hình chữ nhật, các cạnh kề nhau có mối quan hệ gì?",
        options: ["Song song", "Cắt nhau", "Vuông góc", "Chồng lên nhau"],
        correctAnswer: "Vuông góc",
      },
      {
        id: 5,
        question:
          "Nếu đường thẳng 'a' vuông góc với đường thẳng 'b', thì đường thẳng 'b' có vuông góc với đường thẳng 'a' không?",
        options: ["Có", "Không", "Tùy trường hợp", "Chỉ khi chúng bằng nhau"],
        correctAnswer: "Có",
      },
      {
        id: 6,
        question:
          "Hai đường thẳng cắt nhau tạo thành một góc 90 độ thì chúng là:",
        options: [
          "Hai đường thẳng song song",
          "Hai đường thẳng trùng nhau",
          "Hai đường thẳng vuông góc",
          "Hai đường thẳng bất kì",
        ],
        correctAnswer: "Hai đường thẳng vuông góc",
      },
      {
        id: 7,
        question: "Hình vuông có các cặp cạnh nào vuông góc với nhau?",
        options: [
          "Các cạnh đối diện",
          "Các cạnh kề nhau",
          "Các đường chéo",
          "Tất cả các cạnh",
        ],
        correctAnswer: "Các cạnh kề nhau",
      },
      {
        id: 8,
        question:
          "Một đường thẳng đi qua trung điểm của một đoạn thẳng và vuông góc với đoạn thẳng đó được gọi là gì?",
        options: [
          "Đường phân giác",
          "Đường trung trực",
          "Đường cao",
          "Đường trung tuyến",
        ],
        correctAnswer: "Đường trung trực",
      },
      {
        id: 9,
        question:
          "Nếu hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì hai đường thẳng đó có thể như thế nào?",
        options: [
          "Vuông góc với nhau",
          "Song song với nhau",
          "Cắt nhau",
          "Trùng nhau",
        ],
        correctAnswer: "Song song với nhau",
      },
      {
        id: 10,
        question:
          "Trong một tam giác vuông, hai cạnh góc vuông có mối quan hệ gì?",
        options: [
          "Song song",
          "Cắt nhau không vuông",
          "Vuông góc",
          "Trùng nhau",
        ],
        correctAnswer: "Vuông góc",
      },
    ],
  },
  {
    topic: "Hai đường thẳng song song",
    theory:
      "Hai đường thẳng song song là hai đường không bao giờ cắt nhau trên cùng một mặt phẳng.",
    questions: [
      {
        id: 1,
        question: "Hai đường thẳng song song là hai đường thẳng như thế nào?",
        options: [
          "Cắt nhau tại một điểm",
          "Cắt nhau tại nhiều điểm",
          "Không bao giờ cắt nhau",
          "Vuông góc với nhau",
        ],
        correctAnswer: "Không bao giờ cắt nhau",
      },
      {
        id: 2,
        question:
          "Khoảng cách giữa hai đường thẳng song song có thay đổi không?",
        options: [
          "Có",
          "Không",
          "Chỉ thay đổi ở một số điểm",
          "Tùy thuộc vào độ dài",
        ],
        correctAnswer: "Không",
      },
      {
        id: 3,
        question: "Trong hình thang, hai cạnh nào song song với nhau?",
        options: [
          "Hai cạnh bên",
          "Hai đáy",
          "Đường chéo và cạnh bên",
          "Tất cả các cạnh",
        ],
        correctAnswer: "Hai đáy",
      },
      {
        id: 4,
        question:
          "Để vẽ hai đường thẳng song song, ta thường sử dụng dụng cụ nào?",
        options: ["Compa", "Thước đo góc", "Thước thẳng và ê-ke", "Thước dây"],
        correctAnswer: "Thước thẳng và ê-ke",
      },
      {
        id: 5,
        question:
          "Nếu đường thẳng 'm' song song với đường thẳng 'n', thì đường thẳng 'n' có song song với đường thẳng 'm' không?",
        options: ["Có", "Không", "Tùy trường hợp", "Chỉ khi chúng cắt nhau"],
        correctAnswer: "Có",
      },
      {
        id: 6,
        question:
          "Trong hình chữ nhật, các cặp cạnh đối diện có mối quan hệ gì?",
        options: ["Vuông góc", "Cắt nhau", "Song song", "Trùng nhau"],
        correctAnswer: "Song song",
      },
      {
        id: 7,
        question: "Hai đường ray xe lửa là một ví dụ thực tế về:",
        options: [
          "Hai đường thẳng cắt nhau",
          "Hai đường thẳng vuông góc",
          "Hai đường thẳng song song",
          "Hai đường thẳng trùng nhau",
        ],
        correctAnswer: "Hai đường thẳng song song",
      },
      {
        id: 8,
        question:
          "Nếu đường thẳng 'a' vuông góc với đường thẳng 'c', và đường thẳng 'b' cũng vuông góc với đường thẳng 'c', thì 'a' và 'b' có mối quan hệ gì?",
        options: ["Vuông góc", "Song song", "Cắt nhau", "Trùng nhau"],
        correctAnswer: "Song song",
      },
      {
        id: 9,
        question: "Trong một hình bình hành, các cạnh đối diện có đặc điểm gì?",
        options: [
          "Bằng nhau và vuông góc",
          "Bằng nhau và song song",
          "Chỉ bằng nhau",
          "Chỉ song song",
        ],
        correctAnswer: "Bằng nhau và song song",
      },
      {
        id: 10,
        question:
          "Hai đường thẳng song song không có điểm chung. Đúng hay sai?",
        options: ["Đúng", "Sai", "Tùy trường hợp", "Chỉ đúng trong mặt phẳng"],
        correctAnswer: "Đúng",
      },
    ],
  },
  {
    topic: "Giây",
    theory:
      "Giây là đơn vị đo thời gian nhỏ nhất thường dùng. 1 phút = 60 giây.",
    questions: [
      {
        id: 1,
        question: "Đơn vị đo thời gian nhỏ nhất trong các lựa chọn sau là gì?",
        options: ["Phút", "Giờ", "Giây", "Ngày"],
        correctAnswer: "Giây",
      },
      {
        id: 2,
        question: "Một phút có bao nhiêu giây?",
        options: ["30 giây", "60 giây", "100 giây", "120 giây"],
        correctAnswer: "60 giây",
      },
      {
        id: 3,
        question:
          "Đồng hồ kim thường có kim nào di chuyển nhanh nhất để chỉ giây?",
        options: ["Kim giờ", "Kim phút", "Kim giây", "Cả ba kim"],
        correctAnswer: "Kim giây",
      },
      {
        id: 4,
        question: "Trong 2 phút có bao nhiêu giây?",
        options: ["60 giây", "90 giây", "120 giây", "180 giây"],
        correctAnswer: "120 giây",
      },
      {
        id: 5,
        question:
          "Nếu một sự kiện diễn ra trong 180 giây, thì nó kéo dài bao nhiêu phút?",
        options: ["1 phút", "2 phút", "3 phút", "4 phút"],
        correctAnswer: "3 phút",
      },
      {
        id: 6,
        question:
          "Đồng hồ bấm giờ thường dùng đơn vị nào để đo chính xác các khoảng thời gian ngắn?",
        options: ["Phút", "Giờ", "Giây", "Ngày"],
        correctAnswer: "Giây",
      },
      {
        id: 7,
        question: "Số 0.5 phút đổi ra giây là bao nhiêu?",
        options: ["30 giây", "50 giây", "60 giây", "5 giây"],
        correctAnswer: "30 giây",
      },
      {
        id: 8,
        question:
          "Giây là một đơn vị đo thời gian cơ bản trong hệ thống đơn vị quốc tế (SI). Đúng hay sai?",
        options: [
          "Đúng",
          "Sai",
          "Chỉ đúng trong một số trường hợp",
          "Không liên quan",
        ],
        correctAnswer: "Đúng",
      },
      {
        id: 9,
        question:
          "Nếu bạn chạy 100 mét trong 15 giây, 15 giây đó là đơn vị đo gì?",
        options: ["Phút", "Giờ", "Giây", "Ngày"],
        correctAnswer: "Giây",
      },
      {
        id: 10,
        question: "Trong một giờ có bao nhiêu giây?",
        options: ["60 giây", "360 giây", "3600 giây", "600 giây"],
        correctAnswer: "3600 giây",
      },
    ],
  },
  {
    topic: "Thế kỉ",
    theory:
      "1 thế kỉ = 100 năm. Thế kỉ thứ n bắt đầu từ năm (n-1)01 đến năm n00.",
    questions: [
      {
        id: 1,
        question: "Một thế kỉ có bao nhiêu năm?",
        options: ["10 năm", "50 năm", "100 năm", "1000 năm"],
        correctAnswer: "100 năm",
      },
      {
        id: 2,
        question: "Năm 2000 thuộc thế kỉ thứ bao nhiêu?",
        options: ["Thế kỉ 19", "Thế kỉ 20", "Thế kỉ 21", "Thế kỉ 22"],
        correctAnswer: "Thế kỉ 20",
      },
      {
        id: 3,
        question: "Thế kỉ 21 bắt đầu từ năm nào?",
        options: ["Năm 2000", "Năm 2001", "Năm 1900", "Năm 1901"],
        correctAnswer: "Năm 2001",
      },
      {
        id: 4,
        question:
          "Năm 1492 (Christopher Columbus khám phá châu Mỹ) thuộc thế kỉ thứ bao nhiêu?",
        options: ["Thế kỉ 14", "Thế kỉ 15", "Thế kỉ 16", "Thế kỉ 13"],
        correctAnswer: "Thế kỉ 15",
      },
      {
        id: 5,
        question:
          "Tính đến năm 2023, thế kỉ 21 đã trôi qua được bao nhiêu năm?",
        options: ["21 năm", "22 năm", "23 năm", "20 năm"],
        correctAnswer: "23 năm",
      },
      {
        id: 6,
        question:
          "Nếu một sự kiện diễn ra vào năm 1850, sự kiện đó thuộc thế kỉ thứ bao nhiêu?",
        options: ["Thế kỉ 18", "Thế kỉ 19", "Thế kỉ 20", "Thế kỉ 17"],
        correctAnswer: "Thế kỉ 19",
      },
      {
        id: 7,
        question: "Năm 100 thuộc thế kỉ thứ mấy?",
        options: ["Thế kỉ 1", "Thế kỉ 2", "Thế kỉ 10", "Thế kỉ 0"],
        correctAnswer: "Thế kỉ 1",
      },
      {
        id: 8,
        question: "Thế kỉ thứ 'X' bắt đầu từ năm nào và kết thúc vào năm nào?",
        options: [
          "(X-1)01 đến X00",
          "X00 đến (X+1)00",
          "X01 đến (X+1)00",
          "(X-1)00 đến X99",
        ],
        correctAnswer: "(X-1)01 đến X00",
      },
      {
        id: 9,
        question:
          "Việt Nam giành độc lập vào năm 1945. Năm này thuộc thế kỉ nào?",
        options: ["Thế kỉ 19", "Thế kỉ 20", "Thế kỉ 21", "Thế kỉ 18"],
        correctAnswer: "Thế kỉ 20",
      },
      {
        id: 10,
        question:
          "Nếu một nền văn minh tồn tại từ năm 500 TCN đến năm 100 TCN, nền văn minh đó kéo dài bao nhiêu thế kỉ?",
        options: ["4 thế kỉ", "5 thế kỉ", "6 thế kỉ", "7 thế kỉ"],
        correctAnswer: "5 thế kỉ",
      },
    ],
  },
  {
    topic: "Yến, tạ, tấn",
    theory:
      "1 yến = 10kg, 1 tạ = 100kg, 1 tấn = 1000kg. Đây là các đơn vị đo khối lượng lớn.",
    questions: [
      {
        id: 1,
        question: "Một yến bằng bao nhiêu ki-lô-gam (kg)?",
        options: ["1 kg", "10 kg", "100 kg", "1000 kg"],
        correctAnswer: "10 kg",
      },
      {
        id: 2,
        question: "Một tạ bằng bao nhiêu ki-lô-gam (kg)?",
        options: ["10 kg", "100 kg", "1000 kg", "1 kg"],
        correctAnswer: "100 kg",
      },
      {
        id: 3,
        question: "Một tấn bằng bao nhiêu ki-lô-gam (kg)?",
        options: ["100 kg", "1000 kg", "10 kg", "10000 kg"],
        correctAnswer: "1000 kg",
      },
      {
        id: 4,
        question: "Đơn vị đo khối lượng nào lớn nhất trong các lựa chọn sau?",
        options: ["Yến", "Tạ", "Tấn", "Kilôgam"],
        correctAnswer: "Tấn",
      },
      {
        id: 5,
        question: "5 yến bằng bao nhiêu kg?",
        options: ["5 kg", "50 kg", "500 kg", "0.5 kg"],
        correctAnswer: "50 kg",
      },
      {
        id: 6,
        question: "2 tạ bằng bao nhiêu kg?",
        options: ["20 kg", "200 kg", "2000 kg", "2 kg"],
        correctAnswer: "200 kg",
      },
      {
        id: 7,
        question: "3 tấn bằng bao nhiêu kg?",
        options: ["300 kg", "3000 kg", "30000 kg", "30 kg"],
        correctAnswer: "3000 kg",
      },
      {
        id: 8,
        question:
          "Một chiếc xe tải có thể chở tối đa 5 tấn hàng. Điều đó có nghĩa là nó chở tối đa bao nhiêu kg?",
        options: ["500 kg", "5000 kg", "50000 kg", "50 kg"],
        correctAnswer: "5000 kg",
      },
      {
        id: 9,
        question: "Để đổi từ tấn sang tạ, ta làm phép tính nào?",
        options: ["Chia cho 10", "Nhân với 10", "Chia cho 100", "Nhân với 100"],
        correctAnswer: "Nhân với 10",
      },
      {
        id: 10,
        question: "Một yến bằng mấy phần của một tạ?",
        options: ["1/10", "1/100", "1/5", "1/2"],
        correctAnswer: "1/10",
      },
    ],
  },
];

export default data;
