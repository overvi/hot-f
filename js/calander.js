const scripts = document.getElementsByTagName("script");

for (let script of scripts) {
  if (script.getAttribute("single") !== null) {
    const customValue = script.getAttribute("single");
    $(function () {
      moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

      moment.locale("fa", {
        months:
          "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split(
            "_"
          ),
        monthsShort: "فرو_اردی_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split(
          "_"
        ),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
          "_"
        ),
        weekdaysShort: "یکش_دوش_سه‌_چه_پنج_جمع_شنب".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),

        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "jYYYY/jMM/jDD",
          LL: "jD jMMMM jYYYY",
          LLL: "jD jMMMM jYYYY HH:mm",
          LLLL: "dddd jD jMMMM jYYYY HH:mm",
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [پیش ساعت] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال",
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: function (number) {
          return number + "م";
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (input) {
          return input === "بعد از ظهر";
        },
        meridiem: function (hour, minute, isLower) {
          return hour < 12 ? "قبل از ظهر" : "بعد از ظهر";
        },
        week: {
          dow: 6, // Saturday is the first day of the week.
          doy: 12, // The week that contains Jan 1st is the first week of the year.
        },
      });

      // Initialize daterangepicker with Persian locale
      $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        autoApply: true,
        singleDatePicker: customValue == "true" ? true : false,
        locale: {
          format: "jYYYY/jMM/jDD",
          direction: "rtl",
          separator: customValue == "false" ? " <----" : "",
          applyLabel: "اعمال",
          cancelLabel: "لغو",
          fromLabel: "از",
          toLabel: "تا",
          customRangeLabel: "سفارشی",
          weekLabel: "ه",
          daysOfWeek: moment().format("jYYYY/jM/jD"),
          monthNames: moment().format("jYYYY/jM/jD"),
          firstDay: 6,
        },
      });

      const returnDate = (picker) => {
        if (customValue == "false") {
          return (
            moment(picker.startDate).format("jYYYY/jM/jD") +
            "  <----  " +
            moment(picker.endDate).format("jYYYY/jM/jD")
          );
        } else {
          return moment(picker.startDate).format("jYYYY/jM/jD");
        }
      };

      $('input[name="datefilter"]').on(
        "apply.daterangepicker",
        function (ev, picker) {
          $(this).val(returnDate(picker));
        }
      );

      $('input[name="datefilter"]').on(
        "cancel.daterangepicker",
        function (ev, picker) {
          $(this).val("");
        }
      );
    });
  }
}
